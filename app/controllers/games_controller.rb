class GamesController < ApplicationController
  def new
    @animal = Animal.all.sample
  end

  def score
    @answer = params[:answer]
  end
end
