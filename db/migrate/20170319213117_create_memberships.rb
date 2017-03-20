class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :group_id, null: false
      t.integer :user_id, null: false
      t.index :group_id
      t.index :user_id
      t.index [:group_id, :user_id], unique: true
      t.timestamps
    end
  end
end
