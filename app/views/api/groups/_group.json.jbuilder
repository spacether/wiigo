json.extract! group, :id, :name, :description, :hometown, :image_url,
              :topics, :created_at

json.organizer do
  json.partial! 'api/users/usersimple', user: group.organizer
end

json.topics group.topics do |topic|
  json.partial! 'api/topics/topic', topic: topic
end

json.members group.allmembers do |member|
  json.partial! 'api/users/usersimple', user: member
end
