import { RECEIVE_EVENT } from '../actions/event_actions';

const defaultState =  null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return action.event;
    default:
      return state;
  }
};
