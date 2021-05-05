# Factorial:
# 5! = 5 * 4 * 3 * 2 * 1

# n! = n * (n-1)!

require 'pry'
def factorial_iterative(n) # init
  result = 1
  while n > 1 # conditional
    result *= n # mutation
    n -= 1 # mutation: moves towards the conditional being false
  end

  result
end

def factorial_recursive(n) # init
  if n <= 1
    puts "base case reached"
    1
  else
    puts "recursing for n: #{ n-1 }"
    n * factorial_recursive(n-1)
  end
end

binding.pry
