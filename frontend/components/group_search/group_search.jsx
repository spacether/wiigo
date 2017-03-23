import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class GroupSearch extends React.Component {
  constructor(props) {
    super(props);
    let defaultState = this.getState(props);
    this.state = defaultState;
  }

  getState(props){
    let defaultLoc = "San Francisco, CA";
    if (props.location === undefined) {
      return {location: defaultLoc, query: '', topic: ''};
    } else {
      let {location, query} = props.location.query;
      let {dashTopic} = props.params;
      if (dashTopic === undefined) dashTopic = '';
      if (location === undefined) location = defaultLoc;
      if (query === undefined) query = '';
      return {
        location,
        query,
        topic: dashTopic,
      };
    }
  }

  update(property) {
    return (e) => (
      this.setState(
        { [property]: e.target.value },
        () => this.props.searchGroups(this.state)
      )
    );
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

  componentWillUpdate(nextProps, nextState){
    if (this.props.location) {
      let loc = this.props.location;
      let newLoc = nextProps.location;
      let path = loc.pathname + loc.search;
      let newPath = newLoc.pathname + newLoc.search;
      if (path !== newPath) {
        let newState = this.getState(nextProps);
        this.setState(newState);
        this.props.searchGroups(nextState);
        // this.setState(nextState);
      }
    }
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
