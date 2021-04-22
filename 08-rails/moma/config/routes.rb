Rails.application.routes.draw do
  root :to => 'works#index'
  resources :artists # both plural
  resources :works
end
