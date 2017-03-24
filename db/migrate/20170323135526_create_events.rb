class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :group_id, null: false
      t.string :title, null: false
      t.datetime :start_time, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :address, null: false
      t.index :group_id
      t.timestamps
    end
  end
end
