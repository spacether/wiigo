import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

const GroupDetail = (props) => {
  let {group, user} = props;
  let memberIds = group.members.map( member => member.id );
  let button = () => {
    if (user) {
      let newIds = memberIds.concat(user.id);
      return (
        <Link className='button signup'
          onClick={()=>props.updateMembers(group.name, newIds)}>
          Join this Group
        </Link>);
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
        <h2>We have {group.members.length} members</h2>
        <p>
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
