import React from 'react';
import { Link } from 'react-router';

const GroupMiddle = (props) => {
  let {group} = props;
  let date = new Date(group.start_date).toDateString();
  return (
    <div className='groupmiddle-holder'>
      <section className='groupmiddle'>
        <p>
          {group.description}
        </p>
      </section>
      <section className='groupmiddle'>
        <h3>Members</h3>
        <p>
          M M M M M
        </p>
      </section>
    </div>
  );
};

export default GroupMiddle;
