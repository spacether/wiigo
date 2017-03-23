import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class GroupSearch extends React.Component {
  constructor(props) {
    super(props);
    let location = "San Francisco, CA";
    let query = '';
    let topic = '';
    if (props.location) {
      console.log(props.location.query.topic);
      console.log(this.props.params.dashTopic);
      console.log(props.location.query.location);
      console.log(props.location.query.query);
      if (props.location.query.topic) {
        topic = props.location.query.topic;
      } else if (this.props.params.dashTopic) {
        topic = this.props.params.dashTopic;
      }
      if (props.location.query.location) {
        location = props.location.query.location;
      }
      if (props.location.query.query) {
        query = props.location.query.query;
      }
    }
    this.state = {
       location,
       query,
       topic
     };
  }

  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }
  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let {topic, location, query} = this.state;
      let newPath = `/find/${topic}?location=${location}&query=${query}`;
      this.props.searchGroups(this.state)
        .then(() => {
          hashHistory.push(newPath);
        });
    };
  }

  componentDidMount(){
    this.props.searchGroups(this.state);
  }

  render(){
    let selector = (atopic, btopic) => {
      if (atopic === btopic) {
        return true;
      } else {
        return false;
      }
    };
    let {groupsFound, topics} = this.props;
    if (!topics) return null;
    topics[0].title = "All Topics";
    let searchForm = (
      <form className='groupsearchbar'>
        <input type='text' value={this.state.query}
          className='groupsrchtxtbox'
          onChange={this.update('query')} />
        <input type='text' value={this.state.location}
          onChange={this.update('location')}
          className='locinput' />
        <select onChange={this.update('topic')} value={this.state.topic}>
          {topics.map( (topic,i) =>
            <option value={topic.dashTopic} key={i}>
              {topic.title}
            </option>)}
        </select>
        <input type='submit' onClick={this.handleSubmit()} className='button'></input>
      </form>
    );
    if (!groupsFound) return searchForm;
    return (

      <div className='fullwide'>
        {searchForm}

        <ul className='centeredpadded white'>
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
