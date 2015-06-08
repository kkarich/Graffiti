require 'uri'

class BrowseController < ApplicationController
  def index
      @saveUrl = '/' + URI.encode(params[:url], /\W/)
      @url = URI.decode(params[:url])
      
      @site = Site.find_by(url: URI.encode(params[:url], /\W/) )
      
     
  end
  

  
  def save
      @url = URI.encode(params[:url], /\W/)
      site = Site.find_or_create_by(url: @url)
      site.canvas = (params[:canvas])
      print (params[:canvas])
      site.save
      redirect_to '/' +  @url 
  end
  
end
