import React from 'react';
import { Link } from 'react-router';

export default ({item, className, path}) => {
  // have mode = bare, groupname, groupdetail
  return (
  <div className={className}>
    <Link to={path}>
      <img src={item.image_url} ></img>
    </Link>
  </div>
  );
};
