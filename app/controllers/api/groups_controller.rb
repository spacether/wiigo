class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all
    render json: @groups
  end

  def show
    name = realname(params[:dashname])
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
    pass
  end

  private

  def group_params
    params.require(:group)
      .permit(:name, :description, :hometown, :image_url, topic_ids: [])
  end

end

#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text             not null
#  hometown     :string           not null
#  image_url    :string           not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
