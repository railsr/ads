Rails.application.routes.draw do

  resources :ads
  resources :users do
    resources :ads
  end

  post 'auth', to: 'authentication#authenticate_user'
end
