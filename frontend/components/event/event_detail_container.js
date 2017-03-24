import EventDetail from './event_detail';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import * as API from '../../util/rsvp_api';

const mapStateToProps = ({event, user}) => ({
  event,
  user
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let eventId = ownProps.params.eventId;
  return {
    fetchEvent: () => dispatch(fetchEvent(eventId)),
    createRsvp: (bool) => API.createRsvp(eventId, bool),
    updateRsvp: (bool) => API.updateRsvp(eventId, bool)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
