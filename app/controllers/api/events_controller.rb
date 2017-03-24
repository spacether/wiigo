class Api::EventsController < ApplicationController
  def index
    gname = realname(params[:group_dashName])
    @group = Group.find_by_name(gname)
    @pastEvents = @group.pastEvents
    @futureEvents = @group.futureEvents
    render :index
  end

  def show
    @event = Event.find_by_id(params[:id])
    if @event
      render :show
    else
      render json: ["Event not found"], status: 404
    end
  end

  def create
    if current_user.nil?
      render json: ['You must be logged in to create events'], status: 401
    end
    @event = Event.new(event_params)
    my_group = @event.group.organizer.id == current_user.id
    if !my_group
      render json: ['You must lead a group to make events in it'], status: 401
    elsif @event.save
      Rsvp.create!(user_id: current_user.id, event_id: @event.id, going: true)
      render :show
    else
      render json: @event.errors.full_messages, status: 400
    end
  end

  def update
    if current_user.nil?
      render json: ['You must be logged in to edit events'], status: 401
    end
    @event = Event.find_by_id(params[:id])
    if @event
      my_group = @event.group.organizer.id == current_user.id
      if !my_group
        render json: ['You must lead a group to edit its events'], status: 401
      elsif @event.update_attributes(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 400
      end
    else
      render json: ["Event not found"], status: 404
    end
  end

  def destroy
    if current_user.nil?
      render json: ['You must be logged in to delete events'], status: 401
    end
    @event = Event.find_by_id(params[:id])
    if @event
      my_group = @event.group.organizer.id == current_user.id
      if !my_group
        render json: ['You must lead a group to delete its events'], status: 401
      elsif @event.destroy
        head :no_content
      else
        render json: @event.errors.full_messages, status: 400
      end
    else
      render json: ["Event not found"], status: 404
    end
  end

  private

  def event_params
    params.require(:event)
      .permit(:title, :group_id, :start_time, :location, :address, :description)
  end
end
