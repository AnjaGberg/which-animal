class GamesController < ApplicationController
  def new
    @animal = Animal.all.sample
  end

  def score
    @animal = params[:token]
    @answer = params[:answer]
    fetch_result
    respond_to do |format|
      format.html
      format.json
      format.js
    end
  end

  private

  def fetch_result
    @result = if @animal == @answer
                "That's correct! It's a #{@animal}!"
              else
                "Hmm...it's not a #{@answer}. Turn another tile and try again!"
              end
  end
end
