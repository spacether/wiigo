import { RECEIVE_TOPICS } from '../actions/topic_actions';

import { merge } from 'lodash';

const defaultState =  null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    default:
      return state;
  }
};
