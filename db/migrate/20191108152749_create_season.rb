class CreateSeason < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.string :name, null: false
    end
  end
end
