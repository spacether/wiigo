import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import GroupLeft from './group_left';
import GroupRight from './group_right';
import GroupDetail from './group_detail';
import GroupBot from './group_bot';

class GroupShow extends React.Component {
  componentDidMount(){
    this.props.fetchGroup();
    // let {group} = this.props;
    // if (!group) {
    //   this.props.fetchGroup();
    // }
  }
  render() {
    // return (<p>TEST</p>);
    let content = (<section>Group was not found</section>);
    let {group, user} = this.props;
    if (group) {
      content = (
        <section className='groupshow'>
          <GroupLeft group={group} />
          <div className='fullwide'>
            <GroupDetail group={group} user={user}
              joinGroup={this.props.joinGroup}
              leaveGroup={this.props.leaveGroup} />
            <div className='fullwide flexrow'>
              <GroupBot group={group} />
              <GroupRight group={group} />
            </div>
          </div>
        </section>
      );
    }
    return content;
  }
}

export default GroupShow;
