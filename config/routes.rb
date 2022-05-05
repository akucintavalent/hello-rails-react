Rails.application.routes.draw do
  get 'greetings/message'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html



  get '*page', to: 'pages#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # Defines the root path route ("/")
  root 'pages#index'
end
