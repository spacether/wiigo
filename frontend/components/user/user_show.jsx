import React from 'react';
import { hashHistory, Link } from 'react-router';
import UserSmall from './user_small';

class UserShow extends React.Component {
  componentDidMount(){
    let {memberId} = this.props.params;
    if (memberId && !this.props.shown_user) {
      this.props.fetchUser(memberId);
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
    let {dashName} = this.props;
    let {shownUser} = this.props;
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
            <div className='padded'>
              <h2>Member of {shownUser.groups.length} Groups</h2>
              <ul>
                { shownUser.groups.map( (group, i) => (
                  <li key={i}>
                    <Link to={`/${dashName(group.name)}`}>{group.name}</Link>
                  </li>
                ) )}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div>User not loaded yet</div>);
    }
  }
}

export default UserShow;
