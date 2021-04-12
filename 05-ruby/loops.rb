# Infinite loop: Control-c
# while true
#   puts "infinite loop"
# end

# initialize, conditional, update
# i = 0                     # initialize
# while i < 10              # conditional
#   puts "i is now #{ i }"
#   i += 1                  # update
# end

# i = 0
# until i >= 10
#   puts "i is now #{ i }"
#   i += 1
# end

# Iterators; Ruby way to loop
count = 7
count.times { puts "wow" }

10.times do |iteration|
  puts "current iteration: #{ iteration }"
end

# Backwards:
4.downto(0) do |n|
  puts n
end
