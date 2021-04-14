require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  "wow -- this is the home page -- live server restarting"
end

get '/hello' do
  "Hello World from Sinatra" # implicitly returned
end

get '/goodbye' do
  "Goodbye cruel world"
end

# Dynamic content
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }" # Dynamic content from outside Ruby
end

# Marx Brothers Fan Club

# Dynamic URL :placeholder -- infinite number of URLs
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers Fan Club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brothers Fan Club"
end

get '/fanclub/:first/:last/:favorite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brothers Fan Club and their favorite brother is #{ params[:favorite] }"
end

# Second crappiest calculator of the course:
# /multiply/5/3 => 15
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Two serious complaints:
# WHERE IS THE HTML?
# How do we get user input without making the poor slobs edit the URL by hand?
