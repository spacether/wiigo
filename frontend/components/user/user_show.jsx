import React from 'react';
import { hashHistory, Link } from 'react-router';
import UserSmall from './user_small';

class UserShow extends React.Component {
  componentDidMount(){
    let {fetchUser} = this.props;
    let {memberId} = this.props.params;
    if (memberId && !this.props.shown_user) {
      fetchUser(memberId);
    }
  }
  componentWillReceiveProps(nextProps){
    let {id} = nextProps.params;
    let path = this.props.location.pathname;
    let newPath = nextProps.location.pathname;
    if (Boolean(name) && (path !== newPath)) {
      this.props.fetchUser(id);
    }
  }
  render(){
    let {user, shownUser, dashName} = this.props;
    let {leaveGroup, deleteGroup, fetchUser} = this.props;
    let {memberId} = this.props.params;

    let removeButton = (group) => {
      let urlDashname = dashName(group.name);
      if (user && user.id === shownUser.id) {
        if (group.membership_id) {
          return (
            <Link className='button signup lmargin'
              onClick={
                ()=> { leaveGroup(group)
                .then(()=>fetchUser(memberId));
              }}>
              Leave this Group
            </Link>
          );
        } else {
          return (
            <Link className='button signup lmargin'
              onClick={
                () => { deleteGroup(urlDashname)
                .then(()=>fetchUser(memberId));
              }}>
              DELETE this Group
            </Link>
          );
        }
      } else {
        return null;
      }
    };

    const displayGroups = (arr, prefix) => {
      if (arr.length === 0) return null;
      let s = (arr.length === 1) ? '' : 's';
      return (
        <div className='padded'>
          <h2>{prefix}{arr.length} Group{s}</h2>
          <ul>
            { arr.map( (group, i) => (
              <li key={i}>
                <Link to={`/${dashName(group.name)}`}>
                  {group.name}
                </Link>
                {removeButton(group)}
              </li>
            ) )}
          </ul>
        </div>
      );
    };

    if (shownUser) {
      let date = new Date(shownUser.created_at).toDateString();
      return(
        <div className='usershow'>
          <div className='white'>
            <div className='padded'>
              <UserSmall user={shownUser}/>
              <h2>{shownUser.username}</h2>
            </div>
            <div className='padded'>
              <p>Location: {shownUser.location}</p>
              <p>Member Since: {date}</p>
            </div>
            {displayGroups(shownUser.groups, 'Member of ')}
            {displayGroups(shownUser.led_groups, 'Leads ')}
          </div>
        </div>
      );
    } else {
      return (<div>User not loaded yet</div>);
    }
  }
}

export default UserShow;
