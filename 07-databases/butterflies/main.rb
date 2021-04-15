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

# SHOW
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies[0] # Extract the butterfly from the array.
  erb :butterflies_show
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
