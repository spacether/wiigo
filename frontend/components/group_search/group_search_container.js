import GroupSearch from './group_search';
import { connect } from 'react-redux';
import { searchGroups } from '../../actions/group_actions';

const mapStateToProps = ({user, topics, groupsFound}, ownProps) => ({
  user,
  topics,
  groupsFound
});

const mapDispatchToProps = (dispatch) => ({
    searchGroups: options => dispatch(searchGroups(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupSearch);
