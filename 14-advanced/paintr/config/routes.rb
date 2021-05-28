Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/hamldemo' => 'pages#hamldemo'
end
