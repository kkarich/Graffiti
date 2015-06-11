class HomeController < ApplicationController
  def index
      
      @sites = Site.where.not(prettyUrl: nil)
      
  end
  
    def start
      @url = URI.encode(params[:url], /\W/)
      print @url
      redirect_to '/' +  @url
  end
end
