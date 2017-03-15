const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import { merge } from 'lodash';

const defaultState =  {
  signUp: [],
  logIn: [],
  createGroup: [],
  createEvent: [],
  editGroup: [],
  editGroupMembers: [],
  editGroupPhotos: [],
  editGroupTopics: [],
  editEvent: []
};

export default (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState[action.formName] = action.errors;
      return newState;
    default:
      return state;
  }
};
