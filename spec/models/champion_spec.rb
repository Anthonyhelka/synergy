require 'rails_helper'
RSpec.describe "Champion object", type: :model do
    let(:champion) { FactoryBot.create(:champion) }

    it "has a valid name" do
      expect(champion.name.class).to eq String
    end

    it "has a valid icon" do
      expect(champion.icon.class).to eq String
    end

    it "has a valid ability_name" do
      expect(champion.ability_name.class).to eq String
    end

    it "has a valid ability_icon" do
      expect(champion.ability_icon.class).to eq String
    end

    it "has a valid ability_type" do
      expect(champion.ability_type).to be_in(["Active", "Passive"])
    end

    it "has a valid ability_description" do
      expect(champion.ability_description.class).to eq String
    end

    it "has a valid tier" do
      expect(champion.tier).to be_between(1, 5)
    end

    it "has a valid tier_color" do
      expect(champion.tier_color).to be_in(["white", "green", "blue", "purple", "yellow"])
    end

    it "has a valid origin" do
      expect(champion.origin_1).to be_in(["Demon", "Dragon", "Exile", "Glacial", "Hextech", "Imperial", "Ninja", "Noble", "Phantom", "Pirate", "Robot", "Void", "Wild", "Yordle"])
    end

    it "has a valid character_class" do
      expect(champion.character_class_1).to be_in(["Assassin", "Blademaster", "Brawler", "Elementalist", "Guardian", "Gunslinger", "Knight", "Ranger", "Shapeshifter", "Sorcerer"])
    end

    it "has a valid health" do
      expect(champion.health.length).to eq 3
    end

    it "has a valid starting_mana" do
      expect(champion.starting_mana.class).to eq Integer
    end

    it "has a valid mana_cost" do
      expect(champion.mana_cost.class).to eq Integer
    end

    it "has a valid attack_damage" do
      expect(champion.attack_damage.class).to eq Integer
    end

    it "has a valid attack_speed" do
      expect(champion.attack_speed.class).to eq Float
    end

    it "has a valid attack_range" do
      expect(champion.attack_range.class).to eq Integer
    end

    it "has a valid armor" do
      expect(champion.armor.class).to eq Integer
    end

    it "has a valid magic_resist" do
      expect(champion.magic_resist.class).to eq Integer
    end

    it "has a valid player_damage" do
      expect(champion.player_damage.length).to eq 3
    end

    it "is completely valid" do
      expect(champion).to be_valid
    end
end
