json.extract! group, :id, :name, :description, :hometown, :image_url,
              :topics, :created_at

json.organizer do
  json.partial! 'api/users/user', user: group.organizer
end

json.topics group.topics do |topic|
  json.partial! 'api/topics/topic', topic: topic
end
