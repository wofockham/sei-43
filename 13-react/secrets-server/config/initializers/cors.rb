# This config jacked from rack-cors Github (which see).

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # this needs an explicit list of your URLs on Heroku
    resource '*',
      :headers => :any,
      :methods => %i( get post put patch delete options head )
  end
end
