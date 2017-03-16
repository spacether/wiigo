import { RECEIVE_GROUP } from '../actions/group_actions';

import { merge } from 'lodash';

const defaultState =  null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      return action.group;
    default:
      return state;
  }
};
