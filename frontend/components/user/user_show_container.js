import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { dashName } from '../../actions/group_actions';

const mapStateToProps = ({shownUser, user}, ownProps) => {
  return {
    user,
    shownUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dashName,
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
