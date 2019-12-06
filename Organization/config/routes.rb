Rails.application.routes.draw do
  resources :rooms
  resources :tasks
  resources :room_tasks

  root  'controller_name#index' 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
