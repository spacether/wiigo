import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

import { merge } from 'lodash';

const defaultState =  {
  signUp: null,
  logIn: null,
  logOut: null,
  topics: null,
  createGroup: null,
  createEvent: null,
  fetchGroup: null,
  groupsFound: null
  // editGroup: null,
  // editGroupMembers: null,
  // editGroupPhotos: null,
  // editGroupTopics: null,
  // editEvent: null
};

export default (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState[action.formName] = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState[action.formName] = null;
      return newState;
    default:
      return state;
  }
};
