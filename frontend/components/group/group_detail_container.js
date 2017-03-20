import GroupDetail from './group_detail';
import { connect } from 'react-redux';
import { fetchGroup }
  from '../../actions/group_actions';
  import * as MEMBERSHIP_API from '../../util/membership_api';
import { withRouter } from 'react-router';

const mapStateToProps = ({user, group}, ownProps) => ({
  user,
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let urlDashname = ownProps.params.dashName;
  return {
    fetchGroup: () => dispatch(fetchGroup(urlDashname)),
    joinGroup: (group, user) => MEMBERSHIP_API.joinGroup(group, user),
    leaveGroup: (item) => MEMBERSHIP_API.leaveGroup(item)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail));
