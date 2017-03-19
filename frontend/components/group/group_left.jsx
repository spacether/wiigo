import React from 'react';
import { Link } from 'react-router';

const GroupLeft = (props) => {
  let {group} = props;
  let date = new Date(group.created_at).toDateString();
  return (
    <div className='groupleft-holder'>
      <section className='groupleft'>
        <img src={group.image_url} width='160' height='160'></img>
      </section>
      <section className='groupleft'>
        <h3>{group.hometown}</h3>
        <p>Founded {date}</p>
        <br></br>
        <div className='spacebet'>
          <span>Members</span><span>11</span>
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
          <img src={group.organizer.image_url} width='36' height='36'>
          </img> {group.organizer.username}
        </p>
      </section>
      <section className='groupleft'>
        <h3>We're About:</h3>
        <p>
          {group.topics.map( (topic, i) => (
            <a key={i} href="#">
              {topic.title}
            </a>
          ))}
        </p>
      </section>
    </div>
  );
};

export default GroupLeft;
