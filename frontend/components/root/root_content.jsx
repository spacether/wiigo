import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image'

class RootContent extends React.Component {

  componentDidMount(){
    this.props.fetchTopics();
  }

  render(){
    let dashNames = ['Group-One', 'Group-Two', 'Group-Three'];
    let content = (
      <section className='centeredpadded white ctr'>
        <ul>
        {dashNames.map(
          (dname, i) => <Link to={`/${dname}`} key={i} className='lmargin'>{dname}</Link>
      )}
        </ul>
      </section>
    );
    let {topics} = this.props;
    if (!topics) return content;
    let myTopics = topics.slice(5);
    console.log(myTopics);
    return (
      <div className='fullwide'>
        <div className='centeredpadded white'>
          <div className='topicbuttonholder'>
            {myTopics.map( (topic,i) =>
              <Link to={`find/${topic.search_path}`}
                key={i} className='topicbutton'>
                {topic.title}
              </Link>
            )}
          </div>
          {content}
        </div>
        <div className='carouselholder'>
          <div className='topicbuttonholder'>
            {topics.map( (topic,i) =>
              <SquareImage key={i}
                item={topic}
                path={`find/${topic.search_path}`} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RootContent;
