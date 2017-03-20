import { RECEIVE_SHOWN_USER } from '../actions/user_actions';

import { merge } from 'lodash';

const defaultState =  null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SHOWN_USER:
      return action.user;
    default:
      return state;
  }
};
