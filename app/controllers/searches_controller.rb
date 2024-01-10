class SearchesController < ApplicationController
    before_action :authenticate_user!, only: [:create]

    def index
      @searches = current_user ? UserSearch.where(user_id: current_user.id) : []
    end

    def create
      query = params[:query].to_s.strip
      return head :unprocessable_entity if query.empty?

      UserSearch.create(user_id: current_user.id, ip_address: request.remote_ip, query: query)
      head :ok
    end
  end

