class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def overview
    champions = Champion.all
    render json: {
      champions: ActiveModel::Serializer::CollectionSerializer.new(champions, each_serializer: TeamSerializer)
    }
  end

  def origins
    origins = Team.where(team_type: "Origin")
    render json: {
      origins: ActiveModel::Serializer::CollectionSerializer.new(origins, each_serializer: TeamSerializer)
    }
  end

  def classes
    classes = Team.where(team_type: "Class")
    render json: {
      classes: ActiveModel::Serializer::CollectionSerializer.new(classes, each_serializer: TeamSerializer)
    }
  end

  def show
    champion_key = params[:id].downcase
    champion = Champion.where(key: champion_key)
    render json: {
      champion: ActiveModel::Serializer::CollectionSerializer.new(champion, each_serializer: TeamSerializer)
    }
  end
end
