class CreateTopics < ActiveRecord::Migration[5.0]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.string :search_path, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.timestamps
      t.index :search_path, unique: true
      t.index :title, unique: true
    end
  end
end
