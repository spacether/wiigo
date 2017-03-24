export const RECEIVE_EVENT = "RECEIVE_EVENT";
import * as API from '../util/event_api';

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const createEvent = (event) => dispatch => (
  API.createEvent(event)
  .then(realEvent => dispatch(receiveEvent(realEvent)))
);

export const fetchEvent = (eventId) => dispatch => (
  API.fetchEvent(eventId)
  .then(realEvent => dispatch(receiveEvent(realEvent)))
);
