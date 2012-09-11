class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    #@item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])
	#@item = GlossaryItem.new(Term: "CHECKTest4", Description: "CHECKTest4")
	#@item.save
    respond_to do |format|
    #    format.json { render :json => @item.id }
	format.js { 1 }
    end
  end
end
