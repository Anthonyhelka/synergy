Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      get 'champions/season_1', to: 'champions#season_1', as: 'season_1'
      get 'champions/season_2', to: 'champions#season_2', as: 'season_2'
      get 'champions/origins', to: 'champions#origins', as: 'origins'
      get 'champions/classes', to: 'champions#classes', as: 'classes'
      resources :champions, only: [:index, :show]

      resources :summoner, only: [:show]
    end
  end

  get 'champions/overview', to: 'champions#overview', as: 'overview'
  get 'champions/origins', to: 'champions#origins', as: 'origins'
  get 'champions/classes', to: 'champions#classes', as: 'classes'
  resources :champions, only: [:index, :show]

  resources :items, only: [:index]

  resources :summoner, only: [:show]
end
