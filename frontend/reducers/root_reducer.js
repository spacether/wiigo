import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ShownUserReducer from './shown_user_reducer';
import ErrorsReducer from './errors_reducer';
import GroupReducer from './group_reducer';
import TopicsReducer from './topics_reducer';

export default combineReducers({
  user: UserReducer,
  shownUser: ShownUserReducer,
  errors: ErrorsReducer,
  topics: TopicsReducer,
  group: GroupReducer,
});
