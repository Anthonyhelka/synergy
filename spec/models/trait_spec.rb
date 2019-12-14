require 'rails_helper'

RSpec.describe "Trait object", type: :model do
    let(:trait) { FactoryBot.create(:trait) }

    it "has a valid name" do
      expect(trait.name).to be_in(["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle", "Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"])
    end

    it "has a valid icon" do
      expect(trait.icon.class).to eq String
    end

    it "has a valid trait_type" do
      expect(trait.trait_type).to be_in(["Origin", "Class"])
    end

    it "has a valid description" do
      expect(trait.description.class).to eq String
    end

    it "is completely valid" do
      expect(trait).to be_valid
    end
end
