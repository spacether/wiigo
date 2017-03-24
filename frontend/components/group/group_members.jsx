import React from 'react';
import SquareImage from '../shared/square_image';
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
    <div className='fullwide bot_lineautomarg white'>
      <div className='groupright padded'>
        <h2>Members</h2>
      </div>
      {members.map((member, i)=>{
        let date = new Date(member.joined_at).toDateString();
        return (
          <div className='groupright flexrow padded' key={i}>

            <SquareImage item={member} key={i}
              size={[36,36]} className='lfloat'
              path={`/members/${member.id}`}/>

            <p className='flexcol lmargin'>
              <Link to={`members/${member.id}`}>{member.username}</Link>
              <span>Joined {date}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
