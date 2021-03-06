class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    @item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])
	@item.save

	respond_to do |format|
		format.js { render :text =>  @item.id }
    end
  end
 
   def updateglossaryitem
    GlossaryItem.update(params[:id], Term: params[:Term], Description: params[:Description])
	
	respond_to do |format|
		format.js { render :text => params[:id] }
    end
  end
  
  def deleteglossaryitem
	GlossaryItem.delete(params[:id])
	
	respond_to do |format|
		format.js { render :text => params[:id] }
    end
  end
end
