require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
  erb :home
end

get '/result' do
  @stock_symbol = params[:stock_code].upcase
  @info = StockQuote::Stock.quote @stock_symbol
  erb :result
end
