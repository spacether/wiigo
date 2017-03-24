import React from 'react';
import { Link } from 'react-router';

export default ({item, className, path, size, name=false}) => {
  // have mode = bare, groupname, groupdetail
  let label;
  let isGroup = Boolean(item.name);
  let imgStyle = 'imgholder noline fontblack';
  if (isGroup) {
    label = (
      <ul className='imglabel'>
        <li><h2>{item.name}</h2></li>
        <li>{item.memberCount} members</li>
      </ul>
    );
  } else if (name) {
    label = item.username;
    imgStyle = 'imgholder';
  }
  let imgPath = imagePrefix + item.imageUrl;
  if (size) {
    imgPath = imagePrefix + `c_fill,h_${size[1]},w_${size[0]}/` + item.imageUrl;
  }
  if (!name) {
    return (
      <div className={className}>
        <Link to={path} className={imgStyle}>
          <img src={imgPath}></img>
          {label}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <Link to={path} className={imgStyle}>
          <img src={imgPath}></img>
        </Link>
        <Link to={path} className={imgStyle}>{label}</Link>
      </div>
    );
  }
};
