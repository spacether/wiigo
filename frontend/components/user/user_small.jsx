import React from 'react';
import { Link } from 'react-router';
import SquareImage  from '../shared/square_image';

export default (props) => {
  let {user} = props;
  let {printName} = props;
  let name;
  if (printName) name = user.username;
  return (
    <SquareImage className='inlineimg' item={user} size={[36,36]} path={`/members/${user.id}`} />
  );
};
