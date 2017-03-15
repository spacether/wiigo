import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  if (props.user) {
    return (
      <section className='banner short'>
        <div>
        <h2>Come find a club</h2>
        <p>There are so many exciting options to choose from</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className='banner tall'>
        <div>
          <h1>Where will we go today?</h1>
          <h3>Do more of what you love</h3>
          <Link to="/signup" className='button signup'>Sign Up</Link>
        </div>
      </section>
    );
  }
};
