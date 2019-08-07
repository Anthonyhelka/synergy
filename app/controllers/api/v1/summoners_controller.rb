class Api::V1::SummonersController < ApplicationController
  include ::ActionController::Serialization

  def index
  end

  def show
    summoner_name = params["id"]
    summoner_name = URI.escape(summoner_name)
    api_key = "RGAPI-0f69909f-d433-41a1-83ad-11f2d6081334"
    summoner_info = HTTParty.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/#{summoner_name}?api_key=#{api_key}")
    summoner_id = summoner_info["id"]
    ranked_data = HTTParty.get("https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/#{summoner_id}?api_key=#{api_key}")
    tft_data = ranked_data.select { |t| t["queueType"] == "RANKED_TFT"}
    render json: {
      summoner: summoner_info, rank: tft_data[0]
    }
  end

end
