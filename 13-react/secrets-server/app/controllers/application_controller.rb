class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # This is required for AJAX APIs.
end
