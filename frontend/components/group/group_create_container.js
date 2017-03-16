import GroupCreate from './group_create';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';

// NEED CURRENT USER
const mapStateToProps = ({user, errors}, ownProps) => {
  let type = (ownProps.location.pathname === '/signup') ? 'signUp' : 'logIn';
  return {
  loggedIn: Boolean(user),
  errors: errors[type],
  formType: type
  };
};

// NEED CREATE GROUP ONLY
const mapDispatchToProps = (dispatch) => {
  return { createGroup: (group) => dispatch(createGroup(group)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
