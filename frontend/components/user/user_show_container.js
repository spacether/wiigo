import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser, leaveGroup } from '../../actions/user_actions';
import { dashName, deleteGroup } from '../../actions/group_actions';
import * as GROUP_API from '../../util/group_api';

const mapStateToProps = ({shownUser, user}, ownProps) => {
  return {
    user,
    shownUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dashName,
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    leaveGroup: (item) => dispatch(leaveGroup(item)),
    deleteGroup: (dashname) => GROUP_API.deleteGroup(dashname)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
