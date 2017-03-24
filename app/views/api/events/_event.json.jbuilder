json.extract! event, :id, :title, :description, :location, :address
json.startTime event.start_time

json.group do
  json.partial! 'api/groups/groupsimple', group: event.group
end
