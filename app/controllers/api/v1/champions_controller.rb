class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def season_1
    champions = Champion.where(season_id: 1)
    traits = Trait.where(season_id: 1)
    render json: {
      champions: ActiveModel::Serializer::CollectionSerializer.new(champions, each_serializer: TraitSerializer),
      traits: ActiveModel::Serializer::CollectionSerializer.new(traits, each_serializer: TraitSerializer)
    }
  end

  def season_2
    champions = Champion.where(season_id: 2)
    traits = Trait.where(season_id: 2)
    render json: {
      champions: ActiveModel::Serializer::CollectionSerializer.new(champions, each_serializer: TraitSerializer),
      traits: ActiveModel::Serializer::CollectionSerializer.new(traits, each_serializer: TraitSerializer)
    }
  end

  def show
    split = params["id"].split("_")
    champion_key = split[0]
    season = split[1]
    champion = Champion.where(key: champion_key, season: season)
    render json: {
      champion: ActiveModel::Serializer::CollectionSerializer.new(champion, each_serializer: TraitSerializer)
    }
  end
end
