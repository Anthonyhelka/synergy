Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :champions, only: [:index]
    end
  end

  resources :champions, only: [:index]
end
