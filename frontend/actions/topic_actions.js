export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
import { clearErrors, receiveErrors } from './error_actions';
import * as API from '../util/topic_api';

const receiveTopics = (topics) => ({
  type: RECEIVE_TOPICS,
  topics
});

export const fetchTopics = () => dispatch => (
  API.fetchTopics()
  .then(topics => dispatch(receiveTopics(topics)))
  .then(() => dispatch(clearErrors('topics')))
  .fail(data => dispatch(receiveErrors('topics', data.responseJSON)))
);
