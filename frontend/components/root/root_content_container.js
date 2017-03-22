import RootContent from './root_content';
import { connect } from 'react-redux';

const mapStateToProps = ({user, topics}, ownProps) => ({
  user,
  topics: topics
});

export default connect(
  mapStateToProps,
  null
)(RootContent);
