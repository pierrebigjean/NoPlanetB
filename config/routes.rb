Rails.application.routes.draw do
  root to: 'pages#first_page'
  get "home", to: 'pages#home'
  get "manifeste", to: 'pages#manifeste'
  get "team", to: 'pages#team'
  get "contact", to: 'pages#contact'
  get "soutenir", to: 'pages#soutenir'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
