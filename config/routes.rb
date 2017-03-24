Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :groups,
              only: [:create, :show, :index, :update, :destroy],
              param: :dashName do
      resources :events, only: [:index]
    end
    resources :events, only: [:show, :create, :update, :destroy] do
      resources :rsvps, only: [:create, :update]
    end
    resources :memberships, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
