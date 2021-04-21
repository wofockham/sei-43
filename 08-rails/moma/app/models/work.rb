class Work < ActiveRecord::Base
  belongs_to :artist, :optional => true
end
