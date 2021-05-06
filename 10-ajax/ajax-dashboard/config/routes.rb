Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/api/brother' => 'dashboard#brother'
  get '/api/time' => 'dashboard#time'
  get '/api/uptime' => 'dashboard#uptime'

  get '/api/info' => 'dashboard#info'
end
