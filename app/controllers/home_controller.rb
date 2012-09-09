class HomeController < ApplicationController
  def index
	@glossaryitem = GlossaryItem.all
  end

  def login
  end
end
