class Api::V1::ChampionsController < ApplicationController
  include ::ActionController::Serialization

  def overview
    champions = Champion.all
    render json: {
      champions: champions
    }
  end

  def origins
    demon = Origin.where(name: "Demon")
    dragon = Origin.where(name: "Dragon")
    exile = Origin.where(name: "Exile")
    glacial = Origin.where(name: "Glacial")
    imperial = Origin.where(name: "Imperial")
    ninja = Origin.where(name: "Ninja")
    noble = Origin.where(name: "Noble")
    phantom = Origin.where(name: "Phantom")
    pirate = Origin.where(name: "Pirate")
    robot = Origin.where(name: "Robot")
    void = Origin.where(name: "Void")
    wild = Origin.where(name: "Wild")
    yordle = Origin.where(name: "Yordle")
    render json: {
      demon: ActiveModel::Serializer::CollectionSerializer.new(demon, each_serializer: OriginSerializer),
      dragon: ActiveModel::Serializer::CollectionSerializer.new(dragon, each_serializer: OriginSerializer),
      exile: ActiveModel::Serializer::CollectionSerializer.new(exile, each_serializer: OriginSerializer),
      glacial: ActiveModel::Serializer::CollectionSerializer.new(glacial, each_serializer: OriginSerializer),
      imperial: ActiveModel::Serializer::CollectionSerializer.new(imperial, each_serializer: OriginSerializer),
      ninja: ActiveModel::Serializer::CollectionSerializer.new(ninja, each_serializer: OriginSerializer),
      noble: ActiveModel::Serializer::CollectionSerializer.new(noble, each_serializer: OriginSerializer),
      phantom: ActiveModel::Serializer::CollectionSerializer.new(phantom, each_serializer: OriginSerializer),
      pirate: ActiveModel::Serializer::CollectionSerializer.new(pirate, each_serializer: OriginSerializer),
      robot: ActiveModel::Serializer::CollectionSerializer.new(robot, each_serializer: OriginSerializer),
      void: ActiveModel::Serializer::CollectionSerializer.new(void, each_serializer: OriginSerializer),
      wild: ActiveModel::Serializer::CollectionSerializer.new(wild, each_serializer: OriginSerializer),
      yordle: ActiveModel::Serializer::CollectionSerializer.new(yordle, each_serializer: OriginSerializer)
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
