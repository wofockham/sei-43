class StocksController < ApplicationController
  def form
  end

  def result
    StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
    @symbol = params[:symbol].upcase
    info = StockQuote::Stock.quote @symbol
    @price = info.close # ??
  end
end
