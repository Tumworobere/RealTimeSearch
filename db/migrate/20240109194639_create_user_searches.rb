class CreateUserSearches < ActiveRecord::Migration[7.1]
  def change
    create_table :user_searches do |t|
      t.integer :user_id
      t.string :ip_address
      t.string :query

      t.timestamps
    end
  end
end
