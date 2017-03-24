import React from 'react';
import { Link } from 'react-router';
import SquareImage from '../shared/square_image';

function formatTimeHHMMA(d) {
  const z = (n) => { return (n<10?'0':'')+n; };
  var h = d.getHours();
  return (h%12 || 12) + ':' + z(d.getMinutes()) + ' ' + (h<12? 'AM' :'PM');
}

const printEvent = (event, group, i) => {
  let {organizer} = group;
  if (!event || !organizer) return null;
  let mapLink = "https://maps.google.com/maps?f=q&hl=en&q="+encodeURI(event.address);
  let eventLink = `${group.dashName}/events/${event.id}`;
  let startDate = new Date(event.startTime);
  let textTime = startDate.toDateString()+', '+formatTimeHHMMA(startDate);
  return (
    <div key={i} className='padded white inside_divbmargin'>
      <div><h2><Link to={eventLink}>{event.title}</Link></h2></div>
      <div>
        <h3>{textTime}</h3>
        <h4>{event.location}</h4>
        <h4><a href={mapLink}>{event.address}</a></h4>
      </div>

      <div>
        {event.attendees.map( (member,j) =>
          <SquareImage item={member} key={j}
            size={[36,36]} className='inlineimg'
            path={`/members/${member.id}`}/>
          )}
      </div>

      <div>
        {event.description}
      </div>
      <div>
        Hosted by <Link to={`members/${organizer.id}`}>
          {organizer.username}
        </Link>
      </div>
    </div>
  );
};

const GroupBot = (props) => {
  let {group, user} = props;
  let {organizer} = group;
  let newEventUrl = `${group.dashName}/new`;
  let newEventLink = null;
  if (user && user.id === group.organizer.id) {
    newEventLink = (<div className='tmargin'><Link className='tmargin' to={newEventUrl}>Create Event</Link></div>);
  }
  return (
    <div className='groupmiddle-holder'>
      <div className='botmarg'>
        <div className='padded white'>
          <h2>Welcome!</h2>
          {newEventLink}
        </div>
        <div className='padded white'>
          <h4>Upcoming Events: </h4>
        </div>
        {group.futureEvents.map( (event, i) => printEvent(event, group, i))}
      </div>


      <div className='botmarg'>
        <div className='padded white'>
          <h3>Past Events: </h3>
        </div>
        {group.pastEvents.map( (event, i) => printEvent(event, group, i))}
      </div>
    </div>
  );
};

export default GroupBot;
