class UsersController < ApplicationController
  def new
    @user = User.new
  end

  # Fat Models, Thin Controllers

  def create
    @user = User.new user_params

    if @user.save # returns truthy on success
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
