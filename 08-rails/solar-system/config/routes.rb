Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  get '/planets/:id' => 'planets#show', :as => :planet
end
