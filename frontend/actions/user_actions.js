export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SHOWN_USER = "RECEIVE_CURRENT_USER";

import { clearErrors, receiveErrors } from './error_actions';
import * as API from '../util/session_api';
import * as MEMBERSHIP_API from '../util/membership_api';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveShownUser = (user) => ({
  type: RECEIVE_SHOWN_USER,
  user
});

export const fetchUser = (userId) => dispatch => (
  API.fetchUser(userId)
  .then(realUser => dispatch(receiveShownUser(realUser)))
  .then(() => dispatch(clearErrors('shownUser')))
  .fail(data => dispatch(receiveErrors('shownUser', data.responseJSON)))
);

export const leaveGroup = (item) => dispatch => (
  MEMBERSHIP_API.leaveGroupFromUser(item)
  .then(realUser => dispatch(receiveShownUser(realUser)))
  .then(() => dispatch(clearErrors('shownUser')))
  .fail(data => dispatch(receiveErrors('shownUser', data.responseJSON)))
);

export const login = (user) => dispatch => (
  API.login(user)
  .then(realUser => dispatch(receiveUser(realUser)))
  .then(() => dispatch(clearErrors('logIn')))
  .fail(data => dispatch(receiveErrors('logIn', data.responseJSON)))
);

export const logout = () => dispatch => (
  API.logout()
  .then(realser => dispatch(receiveUser(null)))
  .then(() => dispatch(clearErrors('logOut')))
  .fail(data => dispatch(receiveErrors('logOut', data.responseJSON)))
);

export const signup = (user) => dispatch => (
  API.signup(user)
  .then(realUser => dispatch(receiveUser(realUser)))
  .then(() => dispatch(clearErrors('signUp')))
  .fail(data => dispatch(receiveErrors('signUp', data.responseJSON)))
);
