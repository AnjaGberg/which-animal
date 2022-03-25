Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "games#new"

  resources :games, only: [:new]
  post '/', to: 'games#score'
  post 'score', to: 'games#score'
end
