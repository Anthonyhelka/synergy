require 'rails_helper'
RSpec.describe Team, type: :model do
    let(:team_one) { FactoryBot.create(:team) }
    let!(:team_two) { FactoryBot.create(:team)}

    it "has a valid factory" do
      expect(team_one).to be_valid
      expect(team_two).to be_valid
    end
end
