class CreateOrigin < ActiveRecord::Migration[5.2]
  def change
    create_table :origins do |t|
      t.string :name, null: false
      t.string :icon, null: false
      t.string :desciption, null: false
      t.string :upgrade_1, null: false
      t.string :upgrade_2
      t.string :upgrade_3
    end
  end
end
