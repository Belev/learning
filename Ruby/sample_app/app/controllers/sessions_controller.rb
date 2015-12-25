class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    authenticated = user && user.authenticate(params[:session][:password])

    if authenticated && user.activated?
      log_in user
      redirect_to user
    elsif authenticated && !user.activated?
      message = "Account not activated. "
      message += "Check your email for the activation link."
      flash[:warning] = message
      redirect_to root_url
    else
      flash.now[:danger] = "Invalid email/password combination"
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
