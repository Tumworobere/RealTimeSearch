Rails.application.routes.draw do
  devise_for :users
  resources :searches, only: [:create]
  root 'searches#index'
end
