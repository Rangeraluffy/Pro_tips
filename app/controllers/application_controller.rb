class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_locale

  helper_method :logged_in?, :current_user, :admin?

  # Locale methods
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  #Define logged_in and current user

  def current_user
    if @current_user.present?
    return @current_user
  end

  @current_user = User.find(session[:user_id])
  end

  def logged_in?
    session[:user_id].present?
  end

  def admin?
    current_user.role == 'admin'
  end

  def ensure_authenticated
    unless logged_in?
      redirect_to login_path
    end
  end

  def ensure_admin
    unless admin?
      redirect_to account_path
    end
  end
end
