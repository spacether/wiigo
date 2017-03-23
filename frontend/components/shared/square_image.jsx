import React from 'react';
import { Link } from 'react-router';

export default ({item, className, path, size}) => {
  // have mode = bare, groupname, groupdetail
  let image = (<img src={imagePrefix + item.imageUrl} className='imgclass'></img>);
  if (size) image = (
    <img src={imagePrefix + item.imageUrl} className='imgclass'
      width={`${size[0]}px`} height={`${size[1]}px`}></img>
  );
  let label;
  let isGroup = Boolean(item.name);
  if (isGroup) {
    label = (
      <ul className='imglabel'>
        <li><h2>{item.name}</h2></li>
        <li>{item.memberCount} members</li>
      </ul>
    );
  }

  return (
  <div className={className}>
    <Link to={path} className='imgholder noline fontblack'>
      {image}
      {label}
    </Link>
  </div>
  );
};
