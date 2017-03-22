import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class GroupSearch extends React.Component {

  render(){
    let {topics} = this.props;
    return (
      <div className='fullwide'>

        <ul className='centeredpadded white'>
          <li className='lfloat'><h3>Results:</h3></li>
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

export default GroupSearch;
