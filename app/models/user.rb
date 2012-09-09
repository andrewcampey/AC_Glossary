class User < ActiveRecord::Base
  attr_accessible :Username, :Password, :Firstname, :Lastname
end
