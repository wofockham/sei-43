# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

debug_mode = false # TODO: change to false

print "What is the maximum possible value you'd like to guess: "
MAX_VALUE = gets.to_i

SECRET_NUMBER = rand 0..MAX_VALUE # Range

puts "The secret number is #{ SECRET_NUMBER }" if debug_mode

print "Guess the secret number between 0 and #{ MAX_VALUE }: "
guess = gets.to_i

until guess == SECRET_NUMBER
  if guess > SECRET_NUMBER
    print "Wrong! Guess lower: "
  else
    print "Wrong! Guess higher: "
  end
  guess = gets.to_i
end

puts "Congratulations!"
