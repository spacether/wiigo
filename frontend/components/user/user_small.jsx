import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  let {user} = props;
  let {printName} = props;
  let name;
  if (printName) name = user.username;
  return (
    <Link to={`/members/${user.id}`} className={props.className}>
    <img src={user.image_url} width='36' height='36' alt={user.username}>
    </img>{name}</Link>
  );
};
