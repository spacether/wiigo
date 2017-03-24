import React from 'react';
import GroupLeft from '../group/group_left';

class GroupShow extends React.Component {
  componentDidMount(){
    this.props.fetchEvent();
  }
  render() {
    let {event} = this.props;
    console.log(event);
    let content = (
      <section className='groupshow'>
        <div className='fullwide white padded'>Event not found</div>
      </section>
    );
    if (event) {
      let {group} = event;
      content = (
        <section className='groupshow'>
          <GroupLeft group={group} />
          {this.props.children}
        </section>
      );
    }
    return content;
  }
}

export default GroupShow;
