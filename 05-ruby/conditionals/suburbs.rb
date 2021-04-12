# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you live: "
residence = gets.chomp.capitalize

puts case residence
when 'Bondi'
  "Something about sunburn"
when 'Glebe'
  "Nice foreshore walk"
when 'Gosford'
  "That's not really Sydney is it?"
else
  "I'm sure that's lovely"
end
