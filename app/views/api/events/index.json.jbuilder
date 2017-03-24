json.pastEvents @pastEvents do |event|
  json.partial! 'api/events/eventsimple', event: event
end

json.futureEvents @futureEvents do |event|
  json.partial! 'api/events/event', event: event
end
