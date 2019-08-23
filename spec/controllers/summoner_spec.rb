require "rails_helper"

RSpec.describe Api::V1::SummonerController, type: :controller do
  describe "GET#show" do
    it "returns successful response with json-formatted data" do
      get :show, params: {id: "na-wolfer"}
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns summoner that has both a valid name and ranked profile" do
      get :show, params: {id: "na-wolfer"}
      response_json = JSON.parse(response.body)
      expect(response_json.length).to eq 2
      expect(response_json["summoner"]["name"]).to eq "Wolfer"
      expect(response_json["rank"]["queueType"]).to eq "RANKED_TFT"
    end

    it "returns summoner that has a valid name but an invalid ranked profile" do
      get :show, params: {id: "na-ratchet"}
      response_json = JSON.parse(response.body)
      expect(response_json.length).to eq 2
      expect(response_json["summoner"]["name"]).to eq "Ratchet"
      expect(response_json["rank"]).to eq nil
    end

    it "returns summoner that has both an invalid name and ranked profile" do
      get :show, params: {id: "na-zyx987zyx987"}
      response_json = JSON.parse(response.body)
      expect(response_json["summoner"]["status"]["message"]).to eq "Data not found - summoner not found"
    end
  end
end
