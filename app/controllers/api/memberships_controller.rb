class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      @group = @membership.group
      render 'api/groups/show'
    else
      render json: @membership.errors.full_messages, status: 400
    end
  end

  def destroy
    @membership = Membership.find_by_id(params[:id])
    if current_user.nil?
      render json: ['You must be logged in to edit groups'], status: 401
    elsif @membership.nil?
      render json: ['Membership not found'], status: 404
    elsif @membership.user_id == current_user.id ||
          @membership.group.organize.id == current_user.id
      custom_destroy_item
    else
      render json: ['Invalid credentials'], status: 401
    end

  end

  private

  def custom_destroy_item
    if @membership.destroy
      if params[:type] == "Group"
        @group = @membership.group
        render 'api/groups/show'
      elsif params[:type] == "User"
        @user = @membership.user
        render 'api/users/show'
      end
    else
      render json: @membership.errors.full_messages, status: 400
    end
  end

  def membership_params
    params.require(:membership).permit(:group_id, :user_id)
  end

end
