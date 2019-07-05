class CreateJoinTableChampionsOrigins < ActiveRecord::Migration[5.2]
  def change
    create_join_table :champions, :origins do |t|
      t.index [:champion_id, :origin_id]
    end
  end
end
