import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const printEvent = (event, group, i) => {
  let {organizer} = group;
  if (!event || !organizer) return null;
  let mapLink = "https://maps.google.com/maps?f=q&hl=en&q="+encodeURI(event.address);
  let eventLink = `${group.dashName}/events/${event.id}`;
  return (
    <section className='groupmiddle' key={i}>
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
  let {group} = props;
  let {organizer} = group;
  return (
    <div className='flexcol'>
      <div className='group-botmarg white'>
        <section className='groupmiddle'>
          <h3>
            Welcome!
          </h3>
          <nav>
            <span>Upcoming Events: </span>
          </nav>
        </section>
        {group.futureEvents.map( (event, i) => printEvent(event, group, i))}
      </div>


      <div className='group-botmarg white'>
        <section className='groupmiddle'>
          <h3>Past Events: </h3>
        </section>
        {group.pastEvents.map( (event, i) => printEvent(event, group, i))}
      </div>
    </div>
  );
};

export default GroupBot;
