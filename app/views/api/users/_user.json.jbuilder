json.extract! user, :id, :username, :image_url, :created_at

json.groups user.allgroups do |g|
  json.partial! 'api/groups/groupsimple', group: g
end
