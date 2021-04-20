Rails.application.routes.draw do
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => :new_planet # pedantic
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => :planet
  get '/planets/:id/edit' => 'planets#edit', :as => :edit_planet
  post '/planets/:id' => 'planets#update'
  delete '/planets/:id' => 'planets#destroy'
end
