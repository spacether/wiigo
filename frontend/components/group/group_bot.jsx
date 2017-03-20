import React from 'react';
import { Link } from 'react-router';

const GroupBot = (props) => {
  let {group} = props;
  return (
    <div className='flexcol'>
      <div className='group-botmarg white'>
        <section className='groupmiddle'>
          <h3>
            Welcome!
          </h3>
          <nav>
            <Link>Upcoming({6})</Link><Link>Past({11})</Link>
          </nav>
        </section>
        <section className='groupmiddle'>
          <h2>Local Area Event Title</h2>
          <h3>Event location name</h3>
          <p>
            M M M M M
          </p>
          <p>Our event is the finest eveent. We will come together and
            discuss current events, share food and make music. Wont you
            join us?
          </p>
          <p>Hosted by <a href="">Organizer</a></p>
        </section>
        <section className='groupmiddle'>
          <h2>Local Area Event Title</h2>
          <h3>Event location name</h3>
          <p>
            M M M M M
          </p>
          <p>Our event is the finest eveent. We will come together and
            discuss current events, share food and make music. Wont you
            join us?
          </p>
          <p>Hosted by <a href="">Organizer</a></p>
        </section>
      </div>

      <div className='group-botmarg white'>
        <section className='groupmiddle'>
          <h3>Past Events</h3>
        </section>
        <section className='groupmiddle'>
          <h2>Local Area Event Title</h2>
          <h3>Event location name</h3>
          <p>
            M M M M M
          </p>
          <p>Our event is the finest eveent. We will come together and
            discuss current events, share food and make music. Wont you
            join us?
          </p>
          <p>Hosted by <a href="">Organizer</a></p>
        </section>
        <section className='groupmiddle'>
          <h2>Local Area Event Title</h2>
          <h3>Event location name</h3>
          <p>
            M M M M M
          </p>
          <p>Our event is the finest eveent. We will come together and
            discuss current events, share food and make music. Wont you
            join us?
          </p>
          <p>Hosted by <a href="">Organizer</a></p>
        </section>
      </div>
    </div>
  );
};

export default GroupBot;
