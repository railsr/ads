class ApplicationController < ActionController::API
  before_action :authenticate_request

  private
  def authenticate_request

    if decoded_auth_token
      @current_user = User.find(decoded_auth_token[:user_id])
    else
      unless @current_user
        render json: { errors: "Not Authorized" }, status: :unauthorized
      end
    end
  end

  def decoded_auth_token
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      JsonWebToken.decode(token)
    end
  end
end
