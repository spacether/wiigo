import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class GroupShow extends React.Component {
  componentDidMount(){
    let {group} = this.props;
    if (!group) {
      this.props.fetchGroup();
    }
  }
  render() {
    // return (<p>TEST</p>);
    let content = (<section>Group was not found</section>);
    let {group} = this.props;
    if (group) {
      content = (
        <section>
          <h2>Name</h2>
          <p>{group.name}</p>
          <h2>Description</h2>
          <p>{group.description}</p>
          <h2>Hometown</h2>
          <p>{group.hometown}</p>
          <h2>Picture</h2>
          <p>{group.image_url}</p>
          <h2>Organizer</h2>
          <p>{group.organizer.username}</p>
          <p>{group.organizer.image_url}</p>
        </section>
      );
    }
    return content;
  }
}

export default GroupShow;
