# require 'uri'
# URI.encode(value)

class Api::GroupsController < ApplicationController
  def index
    query = "LOWER(hometown) = :loc AND (LOWER(name) LIKE :val)"
    options_hash = {
      val: "%" + params[:query].downcase + "%",
      loc: params[:location].downcase
    }
    groups = Group
    if params[:topic] != ""
      groups = Topic.where(dash_topic: params[:topic]).first.groups
    end
    @groups = groups.where(query, options_hash)
    render :index
  end

  def show
    name = realname(params[:dashName])
    @group = Group.find_by_name(name)
    if @group
      render :show
    else
      render json: ["Group not found"], status: 404
    end
  end

  def create
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 400
    end
  end

  def update
    name = realname(params[:dashName])
    @group = Group.find_by_name(name)
    if @group
      if @group.update_attributes(group_params)
        render :show
      else
        render json: @group.errors.full_messages, status: 400
      end
    else
      render json: ["Group not found"], status: 404
    end
  end

  def destroy
    name = realname(params[:dashName])
    @group = Group.find_by_name(name)
    if @group.nil?
      render json: ["Group not found"], status: 404
    elsif @group.organizer.id == current_user.id
      if @group.destroy
        head :no_content
      else
        render json: @group.errors.full_messages, status: 400
      end
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  private

  def group_params
    params.require(:group)
      .permit(:name, :description, :hometown, :image_url,
              topic_ids: [], member_ids: [])
  end

  # def search_params
  #   params.permit(:location, :query, :topic)
  # end

end

#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text             not null
#  hometown     :string           not null
#  image_url    :string           not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
