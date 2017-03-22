import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class GroupSearch extends React.Component {
  constructor(props) {
    super(props);
    let location = "San Francisco";
    let query = '';
    let topic = '';
    if (props.location.query.location) {
      location = props.location.query.location;
    }
    if (props.location.query.query) {
      query = props.location.query.query;
    }
    if (props.location.query.topic) {
      topic = props.location.query.topic;
    }
    this.state = {
       location,
       query,
       topic
     };
  }

  componentDidMount(){
    this.props.fetchGroup();
  }

  render(){
    let {groupsFound} = this.props;
    if (!groupsFound) return null;
    return (

      <div className='fullwide'>
        <div><input></input></div>

        <ul className='centeredpadded white'>
          <li className='ctr'><h2>Your Meetups</h2></li>
          <li className='topicbuttonholder'>
          {groupsFound.map( (group,i) =>
            <SquareImage item={group} size={[310,180]} key={i}
              className='margined' path={`${group.dashName}`} />
          )}
          </li>
        </ul>

      </div>


    );
  }
}

export default GroupSearch;
