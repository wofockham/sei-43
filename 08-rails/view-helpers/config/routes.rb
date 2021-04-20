Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/kfc-numbers' => 'pages#numbers', :as => :numbers # Rename the new path to the old name: numbers_path
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
end
