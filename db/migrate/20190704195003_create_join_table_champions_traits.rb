class CreateJoinTableChampionsTraits < ActiveRecord::Migration[5.2]
  def change
    create_join_table :champions, :traits do |t|
      t.index [:champion_id, :trait_id]
    end
  end
end
