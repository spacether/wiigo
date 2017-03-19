import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import GroupLeft from './group_left';
import GroupMiddle from './group_middle';

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
        <section className='groupshow'>
          <GroupLeft group={group} />
          <GroupMiddle group={group} />
        </section>
      );
    }
    return content;
  }
}

export default GroupShow;
