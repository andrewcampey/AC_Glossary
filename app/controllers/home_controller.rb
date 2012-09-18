class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    #@item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])
	@item = GlossaryItem.new(Term: "CHECKTest7", Description: "CHECKTest7")
	@item.save

	respond_to do |format|
		format.js { render text: "@item.id" }
    end
  end
  
  def deleteglossaryitem
	GlossaryItem.delete(params[:id])
  end
end
