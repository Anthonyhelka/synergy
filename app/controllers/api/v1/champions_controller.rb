class Api::V1::ChampionsController < ApplicationController

  def index
    demon = Champion.where(origin_1: "Demon").or(Champion.where(origin_2: "Demon"))
    dragon = Champion.where(origin_1: "Dragon").or(Champion.where(origin_2: "Dragon"))
    exile = Champion.where(origin_1: "Exile").or(Champion.where(origin_2: "Exile"))
    glacial = Champion.where(origin_1: "Glacial").or(Champion.where(origin_2: "Glacial"))
    imperial = Champion.where(origin_1: "Imperial").or(Champion.where(origin_2: "Imperial"))
    ninja = Champion.where(origin_1: "Ninja").or(Champion.where(origin_2: "Ninja"))
    noble = Champion.where(origin_1: "Noble").or(Champion.where(origin_2: "Noble"))
    phantom = Champion.where(origin_1: "Phantom").or(Champion.where(origin_2: "Phantom"))
    pirate = Champion.where(origin_1: "Pirate").or(Champion.where(origin_2: "Pirate"))
    robot = Champion.where(origin_1: "Robot").or(Champion.where(origin_2: "Robot"))
    void = Champion.where(origin_1: "Void").or(Champion.where(origin_2: "Void"))
    wild = Champion.where(origin_1: "Wild").or(Champion.where(origin_2: "Wild"))
    yordle = Champion.where(origin_1: "Yordle").or(Champion.where(origin_2: "Yordle"))
    render json: {
      demon: demon,
      dragon: dragon,
      exile: exile,
      glacial: glacial,
      imperial: imperial,
      ninja: ninja,
      noble: noble,
      phantom: phantom,
      pirate: pirate,
      robot: robot,
      void: void,
      wild: wild,
      yordle: yordle
    }
  end

end
