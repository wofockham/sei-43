class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, starting_balance)
    @accounts[name] = starting_balance
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end

  def withdraw(name, amount)
    @accounts[name] -= amount
  end

  def balance(name)
    @accounts[name]
  end
end
