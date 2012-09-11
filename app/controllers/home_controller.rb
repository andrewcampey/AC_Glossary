require "json"

class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    #@item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])
	@item = GlossaryItem.new(Term: "CHECKTest", Description: "CHECKTest")
    respond_to do |format|
        format.json { render :json => @item.id }
    end
  end
end
