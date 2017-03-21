import React from 'react';
import UserSmall from '../user/user_small';
import { Link } from 'react-router';

export default (props) => {
  let {group} = props;
  let members = group.members.concat(group.organizer);
  members.sort((a,b) => {
      let x = a.username.toLowerCase();
      let y = b.username.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
  });
  return (
    <div className='fullwide group-botmarg white'>
      <div className='groupright'>
        <h2>Members</h2>
      </div>
      {members.map((member, i)=>{
        let date = new Date(member.joined_at).toDateString();
        return (
          <div className='groupright flexrow' key={i}>
            <UserSmall user={member} className='lfloat' />
            <p className='flexcol'>
              <Link to={`members/${member.id}`}>{member.username}</Link>
              <span>Joined {date}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
