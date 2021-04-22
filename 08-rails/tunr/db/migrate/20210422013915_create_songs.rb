class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :title
      t.integer :artist_id
      t.integer :album_id

      t.timestamps
    end
  end
end
