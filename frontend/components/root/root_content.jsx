import React from 'react';
import { hashHistory, Link } from 'react-router';

class RootContent extends React.Component {
  render(){
    let {dashName} = this.props;
    let name = "SF Data Mining";
    return (
      <section className='groupcreatebg'>
        <Link to={'/'+dashName(name)}>{name}</Link>
      </section>
    );
  }
}

export default RootContent;
