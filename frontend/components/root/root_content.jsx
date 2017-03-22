import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class RootContent extends React.Component {

  splashPage(buttonTopics, topics){
    return (
      <div className='fullwide'>
        <div className='centeredpadded white'>
          <div className='topicbuttonholder'>
            {buttonTopics.map( (topic,i) =>
              <Link to={`find/${topic.dashTopic}`}
                key={i} className='topicbutton'>
                {topic.title}
              </Link>
            )}
          </div>
        </div>

        <div className='carouselholder'>
          <div className='flexcol'>
            <h2 className='block'>Upcoming Events Near You</h2>
            <div className='flexrow'>
            {topics.slice(0,4).map( (topic,i) =>
              <SquareImage key={i}
                item={topic}
                path={`find/${topic.dashTopic}`} />
            )}
          </div>
          </div>
        </div>

        <ul className='centeredpadded white'>
          <li className='ctr'><h1>Explore</h1></li>
          <li className='topicbuttonholder'>
          {topics.map( (topic,i) =>
            <div key={i} className='margined'>
              <SquareImage item={topic}
                path={`find/${topic.dashTopic}`} />
              <h2>
                <Link to={`find/${topic.dashTopic}`}
                  className='noline fontblack'>
                  {topic.title}
                </Link>
              </h2>
            </div>
          )}
          </li>
        </ul>

      </div>
    );
  }

  landingPage(user){
    let groups = user.led_groups.concat(user.groups);
    return (
      <div className='fullwide'>

        <ul className='centeredpadded white'>
          <li className='ctr'><h2>Your Meetups</h2></li>
          <li className='topicbuttonholder'>
          {groups.map( (group,i) =>
            <SquareImage item={group} size={[228,180]} key={i}
              className='margined' path={`${group.dashName}`} />
          )}
          </li>
        </ul>

      </div>
    );
  }

  render(){
    let {topics, user} = this.props;
    let buttonTopics = [];
    if (!topics) {
      topics = [];
    } else {
      topics = topics.slice(1);
      buttonTopics = topics.slice(0,6); //returns 6 items
    }
    if (user){
      return this.landingPage(user);
    } else {
      return this.splashPage(buttonTopics, topics);
    }
  }
}

export default RootContent;
