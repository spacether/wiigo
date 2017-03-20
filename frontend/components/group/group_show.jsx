import React from 'react';
import GroupLeft from './group_left';

class GroupShow extends React.Component {
  componentDidMount(){
    this.props.fetchGroup();
  }
  render() {
    // return (<p>TEST</p>);
    let content = (
      <section className='groupshow'>
        <div className='fullwide white padded'>Group not found</div>
      </section>
    );
    let {group} = this.props;
    if (group) {
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
