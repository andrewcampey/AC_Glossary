class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
  
  def addglossaryitem
    @item = GlossaryItem.new(Term: params[:Term], Description: params[:Description])

    respond_to do |format|
        format.json { render :json => @item.id }
    end
  end
end
