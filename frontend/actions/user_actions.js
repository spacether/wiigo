export const RECEIVE_USER = "RECEIVE_CURRENT_USER";
import { receiveErrors } from './error_actions';
import * as API from '../util/session_api';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});



export const login = (user) => dispatch => (
  API.login(user)
  .then(realUser => dispatch(receiveUser(realUser)))
  .fail(data => dispatch(receiveErrors('logIn', data.responseJSON)))
);

export const logout = () => dispatch => (
  API.logout()
  .then(realser => dispatch(receiveUser(null)))
  .fail(data => dispatch(receiveErrors('logOut', data.responseJSON)))
);

export const signup = (user) => dispatch => (
  API.signup(user)
  .then(realUser => dispatch(receiveUser(realUser)))
  .fail(data => dispatch(receiveErrors('signUp', data.responseJSON)))
);
