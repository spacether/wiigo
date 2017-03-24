import React from 'react';
import { Link } from 'react-router';
import SquareImage from '../shared/square_image';

const GroupDetail = (props) => {
  let {group, user, joinGroup, leaveGroup, fetchGroup, refreshUser} = props;
  let isOrganizer = false;
  if (user) isOrganizer = (user.id === group.organizer.id);
  let button = () => {
    if (user && !isOrganizer) {
      let membership = group.members.find(member => (member.id === user.id));
      if (membership) {
        return (
          <div>
            <Link className='button signup bsmall'
              onClick={()=> {
                leaveGroup(membership)
                .then(()=>fetchGroup())
                .then(()=>refreshUser(user));
              }}>
              Leave this Group
            </Link>
          </div>
        );
      } else {
        return (
          <div>
            <Link className='button signup bsmall'
              onClick={()=>{
                joinGroup(group, user)
                .then(()=>fetchGroup())
                .then(()=>refreshUser(user));
              }}>
              Join this Group
            </Link>
          </div>
        );
      }
    } else {
      return null;
    }
  };
  return (
    <div className='fullwide group-botmarg white'>
      <div className='groupright padded'>
        <p>
          {group.description}
        </p>
      </div>
      <div className='groupright padded'>
        <h2>We have {group.memberCount} members</h2>
        <SquareImage item={group.organizer} key={-1}
          size={[36,36]} className='inlineimg'
          path={`/members/${group.organizer.id}`}/>
        {group.members.map( (member,i) =>
          <SquareImage item={member} key={i}
            size={[36,36]} className='inlineimg'
            path={`/members/${member.id}`}/>
          )}
        {button()}
      </div>
    </div>
  );
};

export default GroupDetail;
