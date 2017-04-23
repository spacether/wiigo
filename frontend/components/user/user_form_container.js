import UserForm from './user_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_actions';

const mapStateToProps = ({user, errors}, ownProps) => {
  let loc = ownProps.location;
  let type = (loc && loc.pathname === '/signup') ? 'signUp' : 'logIn';
  return {
  loggedIn: Boolean(user),
  errors: errors[type],
  formType: type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let loc = ownProps.location;
  let func = (loc && loc.pathname === '/signup') ? signup : login;
  return { processForm: (user) => dispatch(func(user)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
