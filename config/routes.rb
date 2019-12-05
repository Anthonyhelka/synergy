Rails.application.routes.draw do
  root "homes#index"

  namespace :api do
    namespace :v1 do
      get "champions/season_1", to: "champions#season_1", as: "season_1"
      get "champions/season_2", to: "champions#season_2", as: "season_2"
      resources :champions, only: [:show]

      resources :summoner, only: [:create, :update, :show]
    end
  end

  get "champions", to: "champions#table", as: "table"
  get "champions/traits", to: "champions#traits", as: "traits"
  resources :champions, only: [:show]

  resources :items, only: [:index]

  resources :summoner, only: [:show]
end
