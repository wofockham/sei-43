require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  x = params[:x].to_f
  y = params[:y].to_f

  # calculate the result
  @result = case params[:operator]
  when '+' then x + y
  when '-' then x - y
  when '*' then x * y
  when '/' then x / y
  end

  # display the result
  erb :result
end

get '/faq' do
  erb :faq
end
