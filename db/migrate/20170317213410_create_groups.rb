class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :hometown, null: false
      t.string :image_url, null: false
      t.integer :organizer_id, null: false
      t.timestamps
      t.index :name, unique: true
    end
  end
end
