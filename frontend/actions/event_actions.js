export const RECEIVE_EVENT = "RECEIVE_EVENT";
import { clearErrors, receiveErrors } from './error_actions';
import * as API from '../util/event_api';
import { hashHistory } from 'react-router';

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const createEvent = (event) => dispatch => (
  API.createEvent(event)
  .then(ev => {
    hashHistory.push(`${ev.group.dashName}/events/${ev.id}`);
    return dispatch(receiveEvent(ev));
  })
  .then(() => dispatch(clearErrors('createEvent')))
  .fail(data => dispatch(receiveErrors('createEvent', data.responseJSON)))
);

export const fetchEvent = (eventId) => dispatch => (
  API.fetchEvent(eventId)
  .then(realEvent => dispatch(receiveEvent(realEvent)))
);
