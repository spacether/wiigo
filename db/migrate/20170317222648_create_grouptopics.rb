class CreateGrouptopics < ActiveRecord::Migration[5.0]
  def change
    create_table :grouptopics do |t|
      t.integer :group_id, null: false
      t.integer :topic_id, null: false
      t.index :group_id
      t.index :topic_id
      t.index [:group_id, :topic_id], unique: true
      t.timestamps
    end
  end
end
