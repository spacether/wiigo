import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  if (props.user) {
    return (
      <header>
        <span className='logo'>Wego</span>
        <nav className='right'>
          <Link>Welcome {props.user.username}</Link>
          <Link onClick={props.logout} className='button logout'>Log Out</Link>
        </nav>

      </header>
    );
  } else {
    return (
      <header>
        <span className='logo'>Wego</span>
        <nav className='right'>
          <Link to="/login" className='button login'>Log In</Link>
          <Link to="/signup" className='button signup'>Sign Up</Link>
        </nav>
      </header>
    );
  }
};
