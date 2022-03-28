class GamesController < ApplicationController
  def new
    @animal = Animal.all.sample
  end

  def score
    @animal = params[:token]
    @answer = params[:answer]
    @result = @animal == @answer ? "correct!" : "not correct"
  end
end
