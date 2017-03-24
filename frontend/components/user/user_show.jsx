import React from 'react';
import { hashHistory, Link } from 'react-router';
import SquareImage from '../shared/square_image';

class UserShow extends React.Component {
  componentDidMount(){
    let {fetchShownUser} = this.props;
    let {memberId} = this.props.params;
    if (memberId && !this.props.shown_user) {
      fetchShownUser(memberId);
    }
  }
  componentWillReceiveProps(nextProps){
    let {id} = nextProps.params;
    let path = this.props.location.pathname;
    let newPath = nextProps.location.pathname;
    if (Boolean(name) && (path !== newPath)) {
      this.props.fetchShownUser(id);
    }
  }
  render(){
    let {user, shownUser} = this.props;
    let {leaveGroup, deleteGroup, fetchShownUser, refreshUser} = this.props;
    let {memberId} = this.props.params;

    let removeButton = (group) => {
      if (user && user.id === shownUser.id) {
        if (group.membership_id) {
          return (
            <Link className='button signup lmargin bremove'
              onClick={
                ()=> { leaveGroup(group)
                .then(()=>fetchShownUser(memberId))
                .then(()=>refreshUser(user));
              }}>
              Leave this Group
            </Link>
          );
        } else {
          return (
            <Link className='button signup lmargin bremove'
              onClick={
                () => { deleteGroup(group.dashName)
                .then(()=>fetchShownUser(memberId))
                .then(()=>refreshUser(user));
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
                <Link to={`/${group.dashName}`}>
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
        <div className='usershow centeredpadded'>
          <div className='white'>
            <div className='padded'>
              <SquareImage item={shownUser} path={`/members/${shownUser.id}`}/>
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
