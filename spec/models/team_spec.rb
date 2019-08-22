require 'rails_helper'
RSpec.describe "Team object", type: :model do
    let(:team) { FactoryBot.create(:team) }

    it "has a valid name" do
      expect(team.name).to be_in(["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle", "Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"])
    end

    it "has a valid icon" do
      expect(team.icon.class).to eq String
    end

    it "has a valid team_type" do
      expect(team.team_type).to be_in(["Origin", "Class"])
    end

    it "has a valid description" do
      expect(team.description.class).to eq String
    end

    it "is completely valid" do
      expect(team).to be_valid
    end
end
