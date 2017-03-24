import EventForm from './event_form';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = ({group, user, errors}) => ({
  group,
  user,
  errors: errors['createEvent']
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
