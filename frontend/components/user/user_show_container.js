import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { deleteGroup } from '../../actions/group_actions';
import * as GROUP_API from '../../util/group_api';
import * as MEMBERSHIP_API from '../../util/membership_api';

const mapStateToProps = ({shownUser, user}, ownProps) => {
  return {
    user,
    shownUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteGroup: (dashName) => GROUP_API.deleteGroup(dashName),
    leaveGroup: (item) => MEMBERSHIP_API.leaveGroup(item)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
