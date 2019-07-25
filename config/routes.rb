Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      get 'champions/overview', to: 'champions#overview', as: 'overview'
      get 'champions/origins', to: 'champions#origins', as: 'origins'
      get 'champions/classes', to: 'champions#classes', as: 'classes'
      resources :champions, only: [:index, :show]
    end
  end

  get 'champions/overview', to: 'champions#overview', as: 'overview'
  get 'champions/origins', to: 'champions#origins', as: 'origins'
  get 'champions/classes', to: 'champions#classes', as: 'classes'
  resources :champions, only: [:index, :show]

  resources :items, only: [:index]

  resources :news, only: [:index]
end
