Rails.application.routes.draw do

  namespace :api do
    get 'memberships/create'
  end

  namespace :api do
    get 'memberships/destroy'
  end

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :groups,
              only: [:create, :show, :index, :update, :destroy],
              param: :dashName
    resources :memberships, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
