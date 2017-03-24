export const createRsvp = (eventId, bool) => (
  $.ajax({
    method: "POST",
    url: `api/events/${eventId}/rsvps`,
    data: {rsvp: {going: bool}}
  })
);

export const updateRsvp = (eventId, bool) => (
  $.ajax({
    method: "PATCH",
    url: `api/events/${eventId}/rsvps/0`,
    data: {rsvp: {going: bool}}
  })
);
