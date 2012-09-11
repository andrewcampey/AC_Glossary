class HomeController < ApplicationController
  def index
	@glossaryitems = GlossaryItem.all
  end

  def login
  end
end
