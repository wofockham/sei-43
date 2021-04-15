require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  sql = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family]}', '#{ params[:image] }')"
  query_db sql
  redirect to('/butterflies') # GET
end

# SHOW
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies[0] # Extract the butterfly from the array.
  erb :butterflies_show
end

# EDIT
get '/butterflies/:id/edit' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies[0] # Extract the butterfly from the array.
  erb :butterflies_edit
end

# UPDATE
post '/butterflies/:id' do
  sql = "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image ] }' WHERE id=#{ params[:id] }"
  query_db sql
  redirect to("/butterflies/#{ params[:id] }") # GET
end

# DESTROY
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to('/butterflies') # GET
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
