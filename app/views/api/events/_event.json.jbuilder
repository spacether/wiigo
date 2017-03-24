json.extract! event, :id, :title, :description, :location, :address
json.startTime event.start_time

json.group do
  json.partial! 'api/groups/groupsimple', group: event.group
end

json.attendees event.attendees do |user|
  json.partial! 'api/users/usersimple', user: user
end

json.organizer do
  json.partial! 'api/users/usersimple', user: event.group.organizer
end

json.rsvps do
  event.rsvps.each{ |rsvp| json.set! rsvp.user_id, rsvp.going }
end
