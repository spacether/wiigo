json.extract! group, :id, :name, :created_at, :memberIds
json.imageUrl group.image_url
json.dashName group.dashName
json.memberCount group.members.length + 1
json.pastEventcount group.pastEvents.length
json.futureEventcount group.futureEvents.length

json.organizer do
  json.partial! 'api/users/usersimple', user: group.organizer
end

json.topics group.topics do |topic|
  json.partial! 'api/topics/topic', topic: topic
end
