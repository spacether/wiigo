import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ErrorsReducer from './errors_reducer';

export default combineReducers({
  user: UserReducer,
  errors: ErrorsReducer
});
