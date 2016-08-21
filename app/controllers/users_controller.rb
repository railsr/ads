class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: :create
  before_action :set_user, only: [:show]

  def show
    render json: @user
  end

  def create
    user = User.new(name: params[:name],
                    email: params[:email],
                    password: params[:password])
    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  private
  def set_user
    @user = User.find(params[:id])
  end
end
