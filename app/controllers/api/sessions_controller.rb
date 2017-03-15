class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(*user_params.values)
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      head :no_content
    else
      render json: ["There is no current user to log out"], status: 400
    end    
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
