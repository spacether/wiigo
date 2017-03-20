import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const Bg = (props) => {
  let {children} = props;
  let {dashName, memberId} = props.params;
  let mystyle = '';
  if (dashName || memberId) mystyle = 'bg-group-page';
  return (
    <div className={mystyle}>
      {children}
    </div>
  );
};

export default Bg;
