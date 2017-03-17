json.array! @topics do |topic|
  json.extract! topic, :id, :title
end
