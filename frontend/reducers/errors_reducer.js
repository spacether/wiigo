import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

import { merge } from 'lodash';

const defaultState =  {
  signUp: null,
  logIn: null,
  topics: null,
  createGroup: null,
  // createEvent: null,
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
      return merge({}, defaultState);
    default:
      return state;
  }
};
