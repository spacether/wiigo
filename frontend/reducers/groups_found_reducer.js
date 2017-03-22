import { RECEIVE_FOUND_GROUPS } from '../actions/group_actions';

const defaultState =  null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FOUND_GROUPS:
      return action.groups;
    default:
      return state;
  }
};
