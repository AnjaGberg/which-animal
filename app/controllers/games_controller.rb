class GamesController < ApplicationController
  def new
    @animal = Animal.all.sample
  end
end
