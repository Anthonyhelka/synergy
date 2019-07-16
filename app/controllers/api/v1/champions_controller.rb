class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def overview
    champions = Champion.all
    render json: {
      champions: champions
    }
  end

  def origins
    origins = Origin.all
    render json: {
      origins: ActiveModel::Serializer::CollectionSerializer.new(origins, each_serializer: OriginSerializer)
    }
  end

  def classes
    assassin = Champion.where(character_class_1: "Assassin").or(Champion.where(character_class_2: "Assassin"))
    blademaster = Champion.where(character_class_1: "Blademaster").or(Champion.where(character_class_2: "Blademaster"))
    brawler = Champion.where(character_class_1: "Brawler").or(Champion.where(character_class_2: "Brawler"))
    elementalist = Champion.where(character_class_1: "Elementalist").or(Champion.where(character_class_2: "Elementalist"))
    guardian = Champion.where(character_class_1: "Guardian").or(Champion.where(character_class_2: "Guardian"))
    gunslinger = Champion.where(character_class_1: "Gunslinger").or(Champion.where(character_class_2: "Gunslinger"))
    knight = Champion.where(character_class_1: "Knight").or(Champion.where(character_class_2: "Knight"))
    ranger = Champion.where(character_class_1: "Ranger").or(Champion.where(character_class_2: "Ranger"))
    shapeshifter = Champion.where(character_class_1: "Shapeshifter").or(Champion.where(character_class_2: "Shapeshifter"))
    sorcerer = Champion.where(character_class_1: "Sorcerer").or(Champion.where(character_class_2: "Sorcerer"))
    render json: {
      assassin: assassin,
      blademaster: blademaster,
      brawler: brawler,
      elementalist: elementalist,
      guardian: guardian,
      gunslinger: gunslinger,
      knight: knight,
      ranger: ranger,
      shapeshifter: shapeshifter,
      sorcerer: sorcerer
    }
  end
end
