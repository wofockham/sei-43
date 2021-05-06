class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico ).sample
    @time = Time.now
    @uptime = `uptime` # This doesn't work on Heroku.
  end
end
