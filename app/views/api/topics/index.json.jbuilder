json.array! @topics do |topic|
  json.extract! topic, :id, :title, :search_path
end
