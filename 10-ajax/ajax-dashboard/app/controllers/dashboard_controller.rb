class DashboardController < ApplicationController
  def brother
    brother = %w(  Groucho Harpo Chico ).sample
    render :plain => brother
  end

  def time
    time = Time.now
    render :plain => time
  end

  def uptime
    uptime = `uptime` # Will not work on Heroku
    render :plain => uptime
  end

  def info
    brother = %w( Groucho Harpo Chico ).sample
    time = Time.now
    uptime = `uptime`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime
    }
  end
end
