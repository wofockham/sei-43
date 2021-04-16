require 'pry'

# An object is kind of like a hash -- it has key/value pairs.
# BUT: You have to predefine the keys.
# A strict hash -- you have to predefine the shape.
# ALSO: Unlike a Ruby hash, an object can have methods (functions inside it).

class Actor
  def award_speech
    "I would like to thank my agent and my parents and my partner. We did it, baby!"
  end

  def deny_allegations
    "I deny that and I don't remember and he's not my type."
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='lampooing authority') # Default parameters
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{ @name } and I play the #{ @instrument }."
  end
end

# Create an instance of the class (AKA an object from that class)
groucho = MarxBrother.new
groucho.name = "Groucho Marx"
groucho.instrument = "guitar"
groucho.vice = 'cigars'

chico = MarxBrother.new 'Chico Marx'
chico.instrument = 'piano'
chico.vice = 'infidelity'

harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

binding.pry
