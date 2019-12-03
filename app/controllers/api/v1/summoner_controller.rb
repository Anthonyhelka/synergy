require 'dotenv'
Dotenv.load('keys.env')

class Api::V1::SummonerController < ApplicationController
  include ::ActionController::Serialization

  def show
    split = params["id"].split("-")
    region = split[0]
    summoner_name = split[1]
    case region
      when "na"
        region = "na1"
      when "eune"
        region = "eun1"
      when "euw"
        region = "euw1"
      when "lan"
        region = "la1"
      when "las"
        region = "la2"
      when "kr"
        region = "kr"
      when "oce"
        region = "oc1"
      when "ru"
        region = "ru"
      when "br"
        region = "br1"
      when "tr"
        region = "tr1"
    end
    summoner_name = URI.escape(summoner_name)
    api_key = ENV.fetch("RIOT_API_KEY")
    summoner_info = HTTParty.get("https://#{region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/#{summoner_name}?api_key=#{api_key}")
    summoner_id = summoner_info["id"]
    ranked_data = HTTParty.get("https://#{region}.api.riotgames.com/tft/league/v1/entries/by-summoner/#{summoner_id}?api_key=#{api_key}")
    render json: {
      summoner: summoner_info, rank: ranked_data[0]
    }
  end

end
