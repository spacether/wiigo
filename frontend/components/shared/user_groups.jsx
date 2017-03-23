import React from 'react';
import SquareImage from './square_image';

export default (props) => {
  let {user} = props;
  let groups = user.led_groups.concat(user.groups);
  return (
    <ul className='centeredpadded white'>
      <li className='ctr'><h2>Your Meetups</h2></li>
      <li className='topicbuttonholder'>
      {groups.map( (group,i) =>
        <SquareImage item={group} size={[228,180]} key={i}
          className='margined' path={`${group.dashName}`} />
      )}
      </li>
    </ul>
  );
};
