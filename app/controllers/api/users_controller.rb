class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    if @user
      render :show
    else
      render json: ["User was not found"], status: 404
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    if @user == current_user
      if @user.update_attributes(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 400
      end
    elsif @user
      render json: ["Invalid credentials"], status: 401
    else
      render json: ["User not found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image_url, group_ids: [])
  end
end
