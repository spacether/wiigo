import React from 'react';
import GroupRight from './group_right';
import GroupDetailContainer from './group_detail_container';
import GroupBot from './group_bot';

export default (props) => (
    <div className='fullwide'>
      <GroupDetailContainer />
      <div className='fullwide flexrow'>
        <GroupBot group={props.group} user={props.user} />
        <GroupRight group={props.group} />
      </div>
    </div>
);
