class AdsController < ApplicationController
  before_action :set_ad, only: [:show, :update, :destroy]

  def index
    @ads = Ad.all
    render json: @ads.order('created_at DESC')
  end

  def show
    render json: @ad
  end

  def create
    @ad = Ad.new(ad_params)
    @ad.user_id = 1 # should be set to current user
    if @ad.save
      render json: @ad, status: :created, location: @ad
    else
      render json: @ad.errors, status: :unprocessable_entity
    end
  end

  def update
    if @ad.update(ad_params)
      render json: @ad
    else
      render json: @ad.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ad.destroy
  end

  private
  def set_ad
    @ad = Ad.find(params[:id])
  end

  def ad_params
    params.require(:ad).permit(:title, :description, :user_id)
  end
end
