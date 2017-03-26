import React from 'react';
import { Link } from 'react-router';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);


class GroupEvents extends React.Component {
  componentDidMount(){
    let {group} = this.props;
    if (!group || this.props.dashName !== group.dashName) {
      this.props.fetchGroup();
    }
  }

  render() {
    let {group} = this.props;
    let startDate = new Date(2016, 0, 1);
    let endDate = new Date(2020, 0, 1);
    let events = [];
    if (group) {
      let {futureEvents, pastEvents} = group;
      events = pastEvents.concat(futureEvents);
      if (events.length > 2) {
        startDate = new Date(events[0].startTime);
        endDate = new Date(events[events.length-1].startTime);
      }
    }
    events = events.map(event => {
      let startTime = new Date(event.startTime);
      var endTime = new Date(event.startTime);
      endTime.setHours(endTime.getHours()+1);
      return ({
        'title': <Link to={`${group.dashName}/events/${event.id}}`}>{event.title}</Link>,
        'start': startTime,
        'end': endTime,
        'url': `${group.dashName}/events/${event.id}}`
      });
    });
    return (
      <div className='groupshow'>
        <div className='fullwide white padded'>
          <div><h2>Events Calendar</h2></div>
          <div>
            <BigCalendar
              events={events}
              defaultDate={new Date()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GroupEvents;
