import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { withRouter } from 'react-router';

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
          <a href='http://justinablack.com/'>Homepage</a>
          <a href='http://www.linkedin.com/pub/justin-black/52/433/813/'>
            LinkedIn
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default withRouter(Header);
