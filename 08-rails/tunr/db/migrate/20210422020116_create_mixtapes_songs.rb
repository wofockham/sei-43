class CreateMixtapesSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :mixtapes_songs, :id => false do |t|
      t.integer :mixtape_id
      t.integer :song_id
    end
  end
end
