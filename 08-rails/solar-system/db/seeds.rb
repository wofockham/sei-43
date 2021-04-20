Planet.destroy_all

Planet.create :name => 'Earth', :orbit => 365.25, :moons => 1
Planet.create :name => 'Venus', :orbit => 283, :moons => 0
Planet.create :name => 'Mars', :orbit => 511, :moons => 6

puts "#{ Planet.count } planets created."
