import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  // modes are:
  // group (when at group or event, with or without login)
  // logged in red banner
  // landing (big banner)
  // seach with a topic (big banner, not logged in, uses topic)
  if (props.event || props.group) {
    let groupName;
    if (props.event) {
      groupName = props.event.group.name;
    } else {
      groupName = props.group.name;
    }
    return (
      <section className='groupbanner ctr'>
        <div>
        <h1>{groupName}</h1>
        </div>
      </section>
    );
  } else if (props.user) {
    return (
      <section className='loginbanner fullwide ctr'>
        <div>
        <h2>Come find a club</h2>
        <p>There are so many exciting options to choose from</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className='bigbanner fullwide ctr'>
        <div>
          <h1>Where will Wiigo today?</h1>
          <h2>Do more of what you love</h2>
          <Link to="/signup" className='button signup'>Sign Up</Link>
        </div>
      </section>
    );
  }
};
