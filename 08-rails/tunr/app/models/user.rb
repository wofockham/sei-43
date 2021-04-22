class User < ApplicationRecord
  has_many :mixtapes
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
end
