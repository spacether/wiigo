export const RECEIVE_GROUP = "RECEIVE_GROUP";
import { clearErrors, receiveErrors } from './error_actions';
import * as API from '../util/group_api';

const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const createGroup = (group) => dispatch => (
  API.createGroup(group)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('createGroup')))
  .fail(data => dispatch(receiveErrors('createGroup', data.responseJSON)))
);

export const fetchGroup = (group) => dispatch => (
  API.fetchGroup(group)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('fetchGroup')))
  .fail(data => dispatch(receiveErrors('fetchGroup', data.responseJSON)))
);

export const updateMembers = (dashname, memberIds) => dispatch => (
  API.updateMembers(dashname, memberIds)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('fetchGroup')))
  .fail(data => dispatch(receiveErrors('fetchGroup', data.responseJSON)))
);


export const dashName = (name) => (
  name.replace(new RegExp(' ', 'g'), '-')
);
