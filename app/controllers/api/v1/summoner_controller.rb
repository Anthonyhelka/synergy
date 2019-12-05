require 'dotenv'
Dotenv.load('keys.env')

class Api::V1::SummonerController < ApplicationController
  include ::ActionController::Serialization

  def create
    api_key = ENV.fetch("RIOT_API_KEY")
    summoner_info = HTTParty.get("https://#{@region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/#{@name}?api_key=#{api_key}")
    if summoner_info.code == 200
      @status = summoner.code
      summoner_id = summoner_info["id"]
      summoner_key = @name
      summoner_name = summoner_info["name"]
      summoner_region = @region
      summoner_icon = summoner_info["profileIconId"]
      summoner_ranked_info = HTTParty.get("https://#{@region}.api.riotgames.com/tft/league/v1/entries/by-summoner/#{summoner_id}?api_key=#{api_key}")
      if summoner_ranked_info.empty?
        ranked_data = {
          tier: "Unranked",
          division: "IV",
          league_points: 0,
          wins: 0,
          losses: 0
        }
      else
        ranked_data = {
          tier: summoner_ranked_info[0]["tier"],
          division: summoner_ranked_info[0]["rank"],
          league_points: summoner_ranked_info[0]["leaguePoints"],
          wins: summoner_ranked_info[0]["wins"],
          losses: summoner_ranked_info[0]["losses"]
        }
      end
      summoner = Summoner.new
      summoner.summoner_id = summoner_id
      summoner.key = summoner_key
      summoner.name = summoner_name
      summoner.region = summoner_region
      summoner.icon = summoner_icon
      summoner.ranked_data = ranked_data
      summoner.save
      show
    else
      render json: {
        summoner: {}, status: "Fail"
      }
    end
  end

  def update
  end

  def show
    split = params["id"].split("-")
    @name = URI.escape(split[1]).downcase
    @region = split[0]
    case @region
      when "na"
        @region = "na1"
      when "euw"
        @region = "euw1"
      when "eune"
        @region = "eun1"
      when "kr"
        @region = "kr"
      when "lan"
        @region = "la1"
      when "las"
        @region = "la2"
      when "br"
        @region = "br1"
    end

    summoner = Summoner.find_by(key: @name, region: @region)

    if summoner.blank?
      create
    else
      render json: {
        summoner: summoner, status: "Success"
      }
    end
  end
end
