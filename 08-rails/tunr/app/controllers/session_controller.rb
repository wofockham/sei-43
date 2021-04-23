class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path # match
    else
      flash[:error_message] = "Invalid email or password"
      redirect_to login_path # no match, try again
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
