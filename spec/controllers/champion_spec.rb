require "rails_helper"

DatabaseCleaner.clean_with(:truncation)

RSpec.describe Api::V1::ChampionsController, type: :controller do
  champion_one = FactoryBot.create(:champion)
  trait_one = FactoryBot.create(:trait, trait_type: "Origin", champions: [champion_one])
  trait_two = FactoryBot.create(:trait, trait_type: "Class", champions: [champion_one])
  season = FactoryBot.create(:season, traits: [trait_one], champions: [champion_one])

  describe "GET#overview" do
    it "returns successful response with json-formatted data" do
      get :overview
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all champions in the database" do
      get :overview
      response_json = JSON.parse(response.body)
      response_json = response_json["champions"]
      expect(response_json.length).to eq 2
      expect(response_json[0]["name"]).to eq champion_one.name
      expect(response_json[1]["name"]).to eq champion_two.name
      expect(response_json[0]["traits"].length).to eq 2
      expect(response_json[1]["traits"].length).to eq 2
    end
  end

  describe "GET#origins" do
    it "returns successful response with json-formatted data" do
      get :origins
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all traits in the database with the trait_type of \"Origin\"" do
      get :origins
      response_json = JSON.parse(response.body)
      response_json = response_json["origins"]
      expect(response_json.length).to eq 1
      expect(response_json[0]["name"]).to eq trait_one.name
      expect(response_json[0]["champions"].length).to eq 2
    end
  end

  describe "GET#classes" do
    it "returns successful response with json-formatted data" do
      get :classes
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all traits in the database with the trait_type of \"Class\"" do
      get :classes
      response_json = JSON.parse(response.body)
      response_json = response_json["classes"]
      expect(response_json.length).to eq 1
      expect(response_json[0]["name"]).to eq trait_two.name
      expect(response_json[0]["champions"].length).to eq 2
    end
  end

  describe "GET#show" do
    it "returns successful response with json-formatted data" do
      get :show, params: {id: champion_two.name}
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns champion that matches parameter" do
      get :show, params: {id: champion_two.name}
      response_json = JSON.parse(response.body)
      response_json = response_json["champion"]
      expect(response_json.length).to eq 1
      expect(response_json[0]["name"]).to eq champion_two.name
      expect(response_json[0]["traits"].length).to eq 2
    end
  end
end
