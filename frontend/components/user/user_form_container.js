import UserForm from './user_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_actions';

const mapStateToProps = ({user, errors}, ownProps) => {
  let loc = ownProps.location;
  let logIn = (loc && loc.pathname.slice(0,6) === '/login') ? true : false;
  return {
  loggedIn: Boolean(user),
  loginErrors: errors['logIn'],
  signupErrors: errors['signUp'],
  logIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
