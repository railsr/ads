Rails.application.routes.draw do
  resources :ads
  resources :users
  post 'authenticate', to: 'authentication#authenticate_user'
end
