class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def overview
    champions = Champion.all
    render json: {
      champions: ActiveModel::Serializer::CollectionSerializer.new(champions, each_serializer: TraitSerializer)
    }
  end

  def origins
    origins = Trait.where(trait_type: "Origin")
    render json: {
      origins: ActiveModel::Serializer::CollectionSerializer.new(origins, each_serializer: TraitSerializer)
    }
  end

  def classes
    classes = Trait.where(trait_type: "Class")
    render json: {
      classes: ActiveModel::Serializer::CollectionSerializer.new(classes, each_serializer: TraitSerializer)
    }
  end

  def show
    champion_key = params[:id].downcase
    champion_all_sets = Champion.where(key: champion_key)
    render json: {
      champion_all_sets: champion_all_sets
    }
  end
end
