class GamesController < ApplicationController
  def new
    @animal = Animal.all.sample
  end

  def score
    @animal = params[:token]
    @answer = params[:answer]
    @won = @animal.downcase == @answer
    fetch_result
    respond_to do |format|
      format.html
      format.json
      format.js
    end
  end

  private

  def fetch_result
    @result = if @won
                "That's correct! It's a #{@animal.capitalize}!"
              else
                "Hmm...it's not a #{@answer.capitalize}. Turn another tile and try again!"
              end
  end
end
