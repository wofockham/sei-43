puts "Hello world"

print "What is your name: " # print() does not add a newline.
name = gets.chomp # Program will pause until the user hits Enter.

puts "Your name is #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname.upcase }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
