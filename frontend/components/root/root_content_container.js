import RootContent from './root_content';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/topic_actions';

const mapStateToProps = ({user, topics}, ownProps) => ({
  user,
  topics
});

const mapDispatchToProps = (dispatch) => (
  { fetchTopics: () => dispatch(fetchTopics()) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContent);
