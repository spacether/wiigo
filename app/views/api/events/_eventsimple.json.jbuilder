json.extract! event, :id, :title, :description, :location, :address
json.startTime event.start_time

json.attendees event.attendees do |user|
  json.partial! 'api/users/usersimple', user: user
end
