class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    #@item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])
	@item = GlossaryItem.new(Term: "CHECKTest6", Description: "CHECKTest6")
	@item.save
    #respond_to do |format|
    #    format.json { render :json => @item.id }
	#format.js { 1 }
    #end
	#respond_to do |format|
	#	format.html { 1 }
    #end
  end
end
