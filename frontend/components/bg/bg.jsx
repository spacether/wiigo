import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const Bg = (props) => {
  let {children} = props;
  let dashName = props.params.dashname;
  let mystyle = '';
  if (dashName) mystyle = 'bg-group-page';
  return (
    <div className={mystyle}>
      {children}
    </div>
  );
};

export default Bg;
