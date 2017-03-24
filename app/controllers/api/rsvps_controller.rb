class Api::RsvpsController < ApplicationController
  def create
    if current_user.nil?
      render json: ['You must be logged in to create rsvps'], status: 401
    else
      @rsvp = Rsvp.new(rsvp_params)
      @rsvp.user_id = current_user.id
      @rsvp.event_id = Event.find_by_id(params[:event_id]).id
      if @rsvp.save
        head :no_content
      else
        render json: @rsvp.errors.full_messages, status: 400
      end
    end
  end

  def update
    @event = Event.find_by_id(params[:event_id])
    @rsvp = Rsvp.find_by_event_id_and_user_id(@event.id, current_user.id)
    if current_user.nil?
      render json: ['You must be logged in to edit rsvps'], status: 401
    elsif @rsvp.nil?
      render json: ['Rsvp not found'], status: 404
    elsif @rsvp.user_id == current_user.id
      if @rsvp.update_attributes(rsvp_params)
        head :no_content
      else
        render json: @rsvp.errors.full_messages, status: 400
      end
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:going)
  end

end
