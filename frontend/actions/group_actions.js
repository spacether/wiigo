export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_FOUND_GROUPS = "RECEIVE_FOUND_GROUPS";
import { clearErrors, receiveErrors } from './error_actions';
import * as GROUP_API from '../util/group_api';

const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

const receiveGroups = (groups) => ({
  type: RECEIVE_FOUND_GROUPS,
  groups
});

export const searchGroups = (options) => dispatch => (
  GROUP_API.searchGroups(options)
  .then(groups => dispatch(receiveGroups(groups)))
  .then(() => dispatch(clearErrors('groupsFound')))
  .fail(data => dispatch(receiveErrors('groupsFound', data.responseJSON)))
);


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

export const dashName = (name) => (
  name.replace(new RegExp(' ', 'g'), '-')
);
