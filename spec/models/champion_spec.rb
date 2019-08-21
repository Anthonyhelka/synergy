require 'rails_helper'
RSpec.describe Champion, type: :model do
    let(:champion_one) { FactoryBot.create(:champion) }
    let!(:champion_two) { FactoryBot.create(:champion)}

    it "has a valid factory" do
      expect(champion_one).to be_valid
      expect(champion_two).to be_valid
    end
end
