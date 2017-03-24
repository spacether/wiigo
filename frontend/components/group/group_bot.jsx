import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const printEvent = (event, group, i) => {
  let {organizer} = group;
  if (!event || !organizer) return null;
  let mapLink = "https://maps.google.com/maps?f=q&hl=en&q="+encodeURI(event.address);
  let eventLink = `${group.dashName}/events/${event.id}`;
  return (
    <section key={i} className='padded white'>
      <h2><Link to={eventLink}>{event.title}</Link></h2>
      <h3>{event.location}</h3>
      <h4><a href={mapLink}>{event.address}</a></h4>

      <p>
        {event.attendees.map( (member,j) =>
          <UserSmall user={member} key={j} />
        )}
      </p>

      <p>
        {event.description}
      </p>
      <p>
        Hosted by <Link to={`members/${organizer.id}`}>
          {organizer.username}
        </Link>
      </p>
    </section>
  );
};

const GroupBot = (props) => {
  let {group, user} = props;
  let {organizer} = group;
  let newEventUrl = `${group.dashName}/new`;
  let newEventLink = null;
  if (user && user.id === group.organizer.id) {
    newEventLink = (<Link to={newEventUrl}>Create Event</Link>);
  }
  return (
    <div className='groupmiddle-holder'>
      <div className='botmarg'>
        <section className='padded white'>
          <h3>
            Welcome!<br></br>
            {newEventLink}
          </h3>
          <nav>
            <span>Upcoming Events: </span>
          </nav>
        </section>
        {group.futureEvents.map( (event, i) => printEvent(event, group, i))}
      </div>


      <div className='botmarg'>
        <section className='padded white'>
          <h3>Past Events: </h3>
        </section>
        {group.pastEvents.map( (event, i) => printEvent(event, group, i))}
      </div>
    </div>
  );
};

export default GroupBot;
