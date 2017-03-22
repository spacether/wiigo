import GroupDetail from './group_detail';
import { connect } from 'react-redux';
import { fetchGroup }
  from '../../actions/group_actions';
  import * as MEMBERSHIP_API from '../../util/membership_api';
import { withRouter } from 'react-router';
import { refreshUser } from '../../actions/user_actions';

const mapStateToProps = ({user, group}, ownProps) => ({
  user,
  group
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let dashName = ownProps.params.dashName;
  return {
    fetchGroup: () => dispatch(fetchGroup(dashName)),
    joinGroup: (group, user) => MEMBERSHIP_API.joinGroup(group, user),
    leaveGroup: (item) => MEMBERSHIP_API.leaveGroup(item),
    refreshUser: (user) => dispatch(refreshUser(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail));
