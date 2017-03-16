import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { withRouter } from 'react-router';

const Header = (props) => {
  let userNav;
  if (props.user) {
    console.log("have a user");
    userNav = (
      <nav className='userfooter'>
        <Link to="/create" className='button'>Create  Group</Link>
        <Link onClick={props.logout} className='button'>Log Out</Link>
      </nav>
    );
  } else {
    console.log("no user");
  }
  return (
    <footer>
      <section>
        {userNav}
        <nav>
          <Link to='https://github.com/spacether/wego'>Github</Link>
          <Link to='http://www.linkedin.com/pub/justin-black/52/433/813/'>LinkedIn</Link>
          <Link to='http://justinablack.com/'>Homepage</Link>
        </nav>
      </section>
    </footer>
  );
};

export default withRouter(Header);
