class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def overview
    champions = Champion.all
    render json: {
      champions: champions
    }
  end

  def origins
    origins = Team.where(teamType: "Origin")
    render json: {
      origins: ActiveModel::Serializer::CollectionSerializer.new(origins, each_serializer: TeamSerializer)
    }
  end

  def classes
    classes = Team.where(teamType: "Class")
    render json: {
      classes: ActiveModel::Serializer::CollectionSerializer.new(classes, each_serializer: TeamSerializer)
    }
  end

  def show
    champion = Champion.where(name: params[:id])
    render json: {
      champion: ActiveModel::Serializer::CollectionSerializer.new(champion, each_serializer: TeamSerializer)
    }
  end
end
