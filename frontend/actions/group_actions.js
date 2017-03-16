export const RECEIVE_GROUP = "RECEIVE_GROUP";
import { clearErrors, receiveErrors } from './error_actions';
import * as API from '../util/group_api';

const receiveGroup = (user) => ({
  type: RECEIVE_GROUP,
  user
});

export const createGroup = (group) => dispatch => (
  API.createGroup(group)
  .then(realGroup => dispatch(receiveGroup(realGroup)))
  .then(() => dispatch(clearErrors()))
  .fail(data => dispatch(receiveErrors('logIn', data.responseJSON)))
);
