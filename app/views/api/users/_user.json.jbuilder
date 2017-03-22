json.extract! user, :id, :username, :created_at
json.imageUrl user.image_url

json.groups user.memberships do |membership|
  json.extract! membership.group, :id, :name
  json.memberCount membership.group.members.length + 1
  json.dashName membership.group.dashName
  json.membership_id membership.id
  json.imageUrl membership.group.image_url
end

json.led_groups user.led_groups do |grp|
  json.extract! grp, :id, :name
  json.dashName grp.dashName
  json.memberCount grp.members.length + 1
  json.imageUrl grp.image_url
end
