import Banner from './banner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchTopics } from '../../actions/topic_actions';

const mapStateToProps = ({user, group, event, topics}, ownProps) => ({
  params: ownProps.params,
  user,
  group,
  event,
  topics
});

const mapDispatchToProps = (dispatch) => (
  { fetchTopics: () => dispatch(fetchTopics()) }
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner));
