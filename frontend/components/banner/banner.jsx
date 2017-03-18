import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  if (props.user) {
    return (
      <section className='banner short fullwidectr'>
        <div>
        <h2>Come find a club</h2>
        <p>There are so many exciting options to choose from</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className='banner tall fullwidectr'>
        <div>
          <h1>Where will Wiigo today?</h1>
          <h2>Do more of what you love</h2>
          <Link to="/signup" className='button signup'>Sign Up</Link>
        </div>
      </section>
    );
  }
};
