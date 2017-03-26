import React from 'react';
import { Link } from 'react-router';

class GroupEvents extends React.Component {
  componentDidMount(){
    let {group} = this.props;
    if (!group || this.props.dashName !== group.dashName) {
      this.props.fetchGroup();
    }
  }

  render() {
    let {group} = this.props;
    return (
      <div className='groupshow'>
        <div className='fullwide white padded'>
          <div><h2>Events Calendar</h2></div>
          <div>Calendar here</div>
        </div>
      </div>
    );
  }
}

export default GroupEvents;
