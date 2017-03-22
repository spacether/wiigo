class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all.where("search_path != ''")
  end
end
