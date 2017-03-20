import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const GroupRight = (props) => {
  let {group} = props;
  let date = new Date(group.created_at).toDateString();
  return (
    <div className='groupright-holder white'>
      <section className='groupright'>
        <h3>What's New</h3>
      </section>
      <section className='groupright'>
        <h4>New rsvp</h4>
        <p>
          <UserSmall user={''} className='rfloat' />
          User {'Guesty'} RSVPed {'Yes'} for {'event title'} {11} days ago
        </p>
      </section>
      <section className='groupright'>
        <h4>New member</h4>
        <p>
          <UserSmall user={''} className='rfloat' />
          New member {'Guesty'} joined {11} days ago
        </p>
      </section>
    </div>
  );
};

export default GroupRight;
