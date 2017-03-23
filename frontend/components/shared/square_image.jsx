import React from 'react';
import { Link } from 'react-router';

export default ({item, className, path, size}) => {
  // have mode = bare, groupname, groupdetail
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
  if (size) {
    return (
    <div className={className}>
      <Link to={path} className='imgholder noline fontblack'>
        <img src={imagePrefix + item.imageUrl}
          width={`${size[0]}px`} height={`${size[1]}px`}></img>
        {label}
      </Link>
    </div>
    );
  } else {
    return (
    <div className={className}>
      <Link to={path} className='imgholder noline fontblack'>
        <img src={imagePrefix + item.imageUrl}></img>
        {label}
      </Link>
    </div>
    );
  }
};
