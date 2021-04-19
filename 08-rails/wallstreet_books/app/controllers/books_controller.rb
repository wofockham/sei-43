class BooksController < ApplicationController
  def form
  end

  def result
    # generate the URL
    @title = params[:book_title].capitalize
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
    info = HTTParty.get book_url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  end
end
