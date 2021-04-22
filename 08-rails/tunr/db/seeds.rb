User.destroy_all
u1 = User.create :email => 'jonesy@ga.co'
u2 = User.create :email => 'craigsy@ga.co'
puts "#{ User.count } users"

Song.destroy_all
s1 = Song.create :title => 'Have A Safe Trip Dear'
s2 = Song.create :title => 'Toxic'
s3 = Song.create :title => "Don't Ask Me To Dance"
s4 = Song.create :title => 'My Head Is My Only House Unless It Rains'
puts "#{ Song.count } songs"

Album.destroy_all
l1 = Album.create :title => 'Engine Takes To The Water'
l2 = Album.create :title => 'In The Zone'
l3 = Album.create :title => 'The Last Romance'
l4 = Album.create :title => 'Clear Spot'
puts "#{ Album.count } albums"

Artist.destroy_all
a1 = Artist.create :name => 'June of 44'
a2 = Artist.create :name => 'Britney Spears'
a3 = Artist.create :name => 'Arab Strap'
a4 = Artist.create :name => 'Captain Beefheart and the Magic Band'
puts "#{ Artist.count } artists"

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nautical Math Rock'
g3 = Genre.create :name => 'Folk'
g4 = Genre.create :name => 'Scottish Misery Rock'
g5 = Genre.create :name => 'Bubblegum Pop'
g6 = Genre.create :name => 'Bollywood'
g7 = Genre.create :name => 'Skronk'
puts "#{ Genre.count } genres"

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Driving Songs'
m2 = Mixtape.create :title => 'Makeout Music'
m3 = Mixtape.create :title => 'Code Jams'
m4 = Mixtape.create :title => 'Monkey Mongs'
puts "#{ Mixtape.count } mixtapes"

# Associations #################################################################
puts "Albums and songs"
l1.songs << s1
l2.songs << s2
l3.songs << s3
l4.songs << s4

puts "Artists and songs"
a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4

puts "Genres and songs"
s1.genres << g1 << g2
s2.genres << g5 << g6
s3.genres << g3 << g4
g7.songs << s4 << s2

puts "Mixtapes and songs"
m1.songs << s1 << s2 << s3 << s4
m2.songs << s2 << s2 << s2 << s2
m3.songs << s2 << s4 << s2 << s4
m4.songs << s4 << s3 << s2 << s1

puts "Mixtapes and users"
u1.mixtapes << m1 << m2
u2.mixtapes << m3 << m4
