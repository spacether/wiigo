import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const GroupDetail = (props) => {
  let {group, user} = props;
  let isOrganizer = false;
  if (user) isOrganizer = (user.id === group.organizer.id);
  let button = () => {
    if (user && !isOrganizer) {
      let membership = group.members.find(member => (member.id === user.id));
      if (membership) {
        return (
          <Link className='button signup'
            onClick={()=>props.leaveGroup(membership)}>
            Leave this Group
          </Link>
        );
      } else {
        return (
          <Link className='button signup'
            onClick={()=>props.joinGroup(group, user)}>
            Join this Group
          </Link>
        );
      }
    } else {
      return null;
    }
  };
  return (
    <div className='fullwide group-botmarg white'>
      <section className='groupright'>
        <p>
          {group.description}
        </p>
      </section>
      <section className='groupright'>
        <h2>We have {group.memberCount} members</h2>
        <p>
          <UserSmall user={group.organizer} key={-1} />
          {group.members.map( (member,i) =>
            <UserSmall user={member} key={i} />
          )}
        </p>
        {button()}
      </section>
    </div>
  );
};

export default GroupDetail;
