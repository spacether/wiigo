import React from 'react';
import { hashHistory, Link } from 'react-router';

class RootContent extends React.Component {
  render(){
    let dashNames = ['Group-One', 'Group-Two', 'Group-Three'];
    return (
      <section className='groupcreatebg'>
        {dashNames.map(
          (dname, i) => <Link to={`/${dname}`} key={i}>{dname}<br/></Link>
      )}
      </section>
    );
  }
}

export default RootContent;
