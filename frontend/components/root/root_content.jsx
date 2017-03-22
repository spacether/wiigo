import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class RootContent extends React.Component {

  render(){
    let dashNames = ['Group-One', 'Group-Two', 'Group-Three'];
    let content = (
      <section className='centeredpadded white ctr'>
        <ul>
        {dashNames.map( (dname, i) =>
          <Link to={`/${dname}`} key={i} className='lmargin'>
            {dname}
          </Link>
      )}
        </ul>
      </section>
    );
    let {topics} = this.props;
    if (!topics) return content;
    let myTopics = topics.slice(0,6); //returns 6 items
    return (
      <div className='fullwide'>

        <div className='centeredpadded white'>
          <div className='topicbuttonholder'>
            {myTopics.map( (topic,i) =>
              <Link to={`find/${topic.dashTopic}`}
                key={i} className='topicbutton'>
                {topic.title}
              </Link>
            )}
          </div>
          {content}
        </div>

        <div className='carouselholder'>
          <div className='flexcol'>
            <h2 className='block'>Upcoming Events Near You</h2>
            <p>
            {topics.map( (topic,i) =>
              <span key={i}>BOX</span>
              // <SquareImage key={i}
              //   item={topic}
              //   path={`find/${topic.searchPath}`} />
            )}
          </p>
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
}

export default RootContent;
