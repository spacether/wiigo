import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';
import SquareImage from '../shared/square_image';

const GroupLeft = (props) => {
  let {group} = props;
  let date = new Date(group.created_at).toDateString();
  return (
    <div className='groupleft-holder white'>
      <section className='groupleft'>
        <SquareImage item={group} size={[160,160]}
          path={`${group.dashName}`} />
      </section>
      <section className='groupleft'>
        <h3>{group.hometown}</h3>
        <p>Founded {date}</p>
        <br></br>
        <div className='spacebet'>
          <span>Members</span><span>{group.memberCount}</span>
        </div>
        <div className='spacebet'>
          <span>Upcoming Meetups</span><span>11</span>
        </div>
        <div className='spacebet'>
          <span>Past Meetups</span><span>11</span>
        </div>
      </section>
      <section className='groupleft'>
        <h3>Organizer</h3>
        <p className="flexrow">
          <UserSmall user={group.organizer} printName={true} />
        </p>
      </section>
      <section className='groupleft'>
        <h3>We're About:</h3>
        <p className='grouplinklist'>
          {group.topics.map( (topic, i) => (
            <Link to={`/find/${topic.search_path}`} key={i}>{topic.title}</Link>
          ))}
        </p>
      </section>
    </div>
  );
};

export default GroupLeft;
