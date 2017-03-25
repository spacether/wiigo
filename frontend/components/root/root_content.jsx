import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';
import GroupSearchContainer from '../group_search/group_search_container';
import UserGroups from '../shared/user_groups';

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

        <ul className='widest centeredpadded white'>
          <li className='ctr'><h1>Explore</h1></li>
          <li className='topicbuttonholder'>
          {topics.map( (topic,i) =>
            <div key={i} className='bmargined'>
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
    return (
      <div className='fullwide'>

        <GroupSearchContainer />

        <UserGroups user={user} />

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
