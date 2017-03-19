import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const Header = (props) => {
  let left, right;
  if (props.user) {
    left = (
      <nav className='left'>
        <Link to="/create" className='button newgroup'>Create  Group</Link>
      </nav>
    );
    right = (
      <nav className='right'>
        <span>Welcome {props.user.username}</span>
        <Link onClick={props.logout} className='button logout'>Log Out</Link>
      </nav>
    );
  } else {
    right = (
      <nav className='right'>
        <Link to="/login/Guesty" className='button guestlogin'>Guest</Link>
        <Link to="/login" className='button login'>Log In</Link>
        <Link to="/signup" className='button signup'>Sign Up</Link>
      </nav>
    );
  }
  return (
    <header>
      {left}
      <span onClick={() => hashHistory.push("/")} className='logo'>Wiigo</span>
      {right}
    </header>
  );
};

export default Header;
