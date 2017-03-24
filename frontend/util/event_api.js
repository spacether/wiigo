export const createEvent = (event) => (
  $.ajax({
    method: "POST",
    url: `api/events`,
    data: {event}
  })
);

export const fetchEvent = (eventId) => (
  $.ajax({
    method: "GET",
    url: `api/events/${eventId}`
  })
);
