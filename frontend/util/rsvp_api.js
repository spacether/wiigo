export const createRsvp = (event, bool) => (
  $.ajax({
    method: "POST",
    url: `api/events/${event.id}/rsvps`,
    data: {rsvp: {going: bool}}
  })
);

export const updateRsvp = (event, bool) => (
  $.ajax({
    method: "PATCH",
    url: `api/events/${event.id}/rsvps`,
    data: {rsvp: {going: bool}}
  })
);
