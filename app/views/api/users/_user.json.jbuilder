json.extract! user, :id, :username, :image_url, :created_at

json.groups user.memberships do |membership|
  json.extract! membership.group, :id, :name, :image_url
  json.memberCount membership.group.members.length + 1
  json.membership_id membership.id
end

json.led_groups user.led_groups do |grp|
  json.extract! grp, :id, :name, :image_url
  json.memberCount grp.members.length + 1
end
