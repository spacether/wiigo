import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  let userNav;
  if (props.user) {
    userNav = (
      <nav className='userfooter'>
        <Link to="/create" className='button'>Create  Group</Link>
        <Link onClick={props.logout} className='button'>Log Out</Link>
      </nav>
    );
  }
  return (
    <footer>
      <section>
        {userNav}
        <nav>
          <a href='https://github.com/spacether/wiigo'>Github</a>
          <a href='https://spacether.github.io/'>Portfolio</a>
          <a href='https://www.linkedin.com/in/justin-a-black/'>
            LinkedIn
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Header;
