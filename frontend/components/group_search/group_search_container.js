import GroupSearch from './group_search';
import { connect } from 'react-redux';

const mapStateToProps = ({user, topics, groupSearch}, ownProps) => ({
  user,
  topics,
  groupSearch
});

export default connect(
  mapStateToProps,
  null
)(GroupSearch);
