Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :groups,
              only: [:create, :show, :index, :update, :destroy],
              param: :dashname
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
