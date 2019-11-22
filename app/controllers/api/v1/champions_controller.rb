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
    champion_key = params[:id].downcase
    champion_all_seasons = Champion.where(key: champion_key)
    champion_season_1 = Champion.where(key: champion_key, season_id: 1)
    champion_season_2 = Champion.where(key: champion_key, season_id: 2)
    if !champion_season_1.empty? && !champion_season_2.empty?
      starting_season = 2
    end
    if champion_season_1.empty?
      champion_season_1 = nil
      starting_season = 2
    else
      champion_season_1 = champion_season_1[0]
    end
    if champion_season_2.empty?
      champion_season_2 = nil
      starting_season = 1
    else
      champion_season_2 = champion_season_2[0]
    end
    render json: {
      champion_all_seasons: ActiveModel::Serializer::CollectionSerializer.new(champion_all_seasons, each_serializer: TraitSerializer),
      starting_season: starting_season
    }
  end
end
