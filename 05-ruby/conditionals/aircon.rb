# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "What is the current temperature: "
current_temperature = gets.to_f

print "Is the air conditioner functional (y/n): "
ac_working = gets[0].downcase

print "What is the desired temperature: "
desired_temperature = gets.to_f

if ac_working == "y"
  puts "Turn on the A/C please" if current_temperature > desired_temperature
else
  if current_temperature > desired_temperature
    puts "Fix the A/C now!  It's hot!"
  else
    puts "Fix the A/C whenever you have the chance...  It's cool..."
  end
end
