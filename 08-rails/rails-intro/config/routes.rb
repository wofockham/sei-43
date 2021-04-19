Rails.application.routes.draw do
  root :to => 'pages#hello'
  get '/hello' => 'pages#hello' # 'controller#action'
  get '/goodbye' => 'pages#goodbye'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
