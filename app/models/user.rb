class User < ActiveRecord::Base
  attr_accessible :id, :Username, :Password, :Firstname, :Lastname
end
