require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Rails will do all this for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Butterfly < ActiveRecord::Base
end

class Plant < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save # butterfly.id is now available:
  redirect to("/butterflies/#{ butterfly.id }")
end

# SHOW
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id] # A single instance, not some garbage array.
  erb :butterflies_show
end

# EDIT
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{ params[:id] }") # GET
end

# DESTROY
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies') # GET
end

# Plants CRUD ##################################################################
# INDEX
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW
get '/plants/new' do
  erb :plants_new
end

# CREATE
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save # INSERT
  redirect to("/plants/#{ plant.id }") # Show
end

# SHOW
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save # UPDATE
  redirect to("/plants/#{ plant.id }")
end

# DESTROY
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy # DELETE
  redirect to('/plants')
end
