import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const GroupDetail = (props) => {
  let {group, user, joinGroup, leaveGroup, fetchGroup} = props;
  let isOrganizer = false;
  if (user) isOrganizer = (user.id === group.organizer.id);
  let button = () => {
    if (user && !isOrganizer) {
      let membership = group.members.find(member => (member.id === user.id));
      if (membership) {
        return (
          <Link className='button signup'
            onClick={()=> {
              leaveGroup(membership)
              .then(()=>fetchGroup());
            }}>
            Leave this Group
          </Link>
        );
      } else {
        return (
          <Link className='button signup'
            onClick={()=>{
              joinGroup(group, user)
              .then(()=>fetchGroup());
            }}>
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
