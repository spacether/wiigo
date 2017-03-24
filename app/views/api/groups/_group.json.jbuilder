json.extract! group, :id, :name, :description, :hometown, :created_at
json.extract! group, :newItems
json.imageUrl group.image_url

json.pastEventcount group.pastEvents.length
json.pastEvents group.pastEvents do |event|
  json.partial! 'api/events/eventsimple', event: event
end

json.futureEventcount group.futureEvents.length
json.futureEvents group.futureEvents do |event|
  json.partial! 'api/events/eventsimple', event: event
end

json.memberCount group.members.length + 1
json.dashName group.dashName

json.organizer do
  json.partial! 'api/users/usersimple', user: group.organizer
  json.joined_at group.created_at
end

json.topics group.topics do |topic|
  json.partial! 'api/topics/topic', topic: topic
end

json.members group.memberships do |membership|
  json.partial! 'api/users/usersimple', user: membership.user
  json.membership_id membership.id
  json.joined_at membership.created_at
end
