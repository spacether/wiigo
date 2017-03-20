class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.user.id != current_user.id
      render json: ['Invalid credentials'], status: 401
    elsif @membership.save
      head :no_content
      # @group = @membership.group
      # render 'api/groups/show'
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
          @membership.group.organizer.id == current_user.id
      if @membership.destroy
        head :no_content
      else
        render json: @membership.errors.full_messages, status: 400
      end
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:group_id, :user_id)
  end

end
