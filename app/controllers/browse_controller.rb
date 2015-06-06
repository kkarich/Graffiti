require 'uri'

class BrowseController < ApplicationController
  def index
      @url = URI.decode(params[:url])
  end
end
