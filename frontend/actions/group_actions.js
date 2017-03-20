export const RECEIVE_GROUP = "RECEIVE_GROUP";
import { clearErrors, receiveErrors } from './error_actions';
import * as GROUP_API from '../util/group_api';
import * as MEMBERSHIP_API from '../util/membership_api';

const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const createGroup = (group) => dispatch => (
  GROUP_API.createGroup(group)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('createGroup')))
  .fail(data => dispatch(receiveErrors('createGroup', data.responseJSON)))
);

export const fetchGroup = (group) => dispatch => (
  GROUP_API.fetchGroup(group)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('fetchGroup')))
  .fail(data => dispatch(receiveErrors('fetchGroup', data.responseJSON)))
);

export const joinGroup = (group, user) => dispatch => (
  MEMBERSHIP_API.joinGroup(group, user)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('fetchGroup')))
  .fail(data => dispatch(receiveErrors('fetchGroup', data.responseJSON)))
);

export const leaveGroup = (item) => dispatch => (
  MEMBERSHIP_API.leaveGroupFromGroup(item)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors('fetchGroup')))
  .fail(data => dispatch(receiveErrors('fetchGroup', data.responseJSON)))
);


export const dashName = (name) => (
  name.replace(new RegExp(' ', 'g'), '-')
);
