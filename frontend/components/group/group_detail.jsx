import React from 'react';
import { Link } from 'react-router';

const GroupDetail = (props) => {
  let {group} = props;
  return (
    <div className='fullwide group-botmarg'>
      <section className='groupright'>
        <p>
          {group.description}
        </p>
      </section>
      <section className='groupright'>
        <h3>Members</h3>
        <p>
          M M M M M
        </p>
      </section>
    </div>
  );
};

export default GroupDetail;
