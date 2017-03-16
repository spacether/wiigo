import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { withRouter } from 'react-router';

const Header = (props) => {

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
        <span onClick={() => hashHistory.push("/")} className='logo'>Wego</span>
        <nav className='right'>
          <Link to="/login/Guesty" className='button guestlogin'>Guest</Link>
          <Link to="/login" className='button login'>Log In</Link>
          <Link to="/signup" className='button signup'>Sign Up</Link>
        </nav>
      </header>
    );
  }
};

export default withRouter(Header);
