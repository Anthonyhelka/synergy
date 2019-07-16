class CreateJoinTableChampionsTeams < ActiveRecord::Migration[5.2]
  def change
    create_join_table :champions, :teams do |t|
      t.index [:champion_id, :team_id]
    end
  end
end
