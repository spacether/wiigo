import UserForm from './user_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_actions';
import { fetchTopics } from '../../actions/topic_actions';

const mapStateToProps = ({user, errors}, ownProps) => {
  let type = (ownProps.location.pathname === '/signup') ? 'signUp' : 'logIn';
  return {
  loggedIn: Boolean(user),
  errors: errors[type],
  formType: type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let func = (ownProps.location.pathname === '/signup') ? signup : login;
  return {
    processForm: (user) => dispatch(func(user)),
    fetchTopics: () => dispatch(fetchTopics())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
