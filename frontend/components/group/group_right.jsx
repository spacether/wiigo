import React from 'react';
import { Link } from 'react-router';
import UserSmall from '../user/user_small';

Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
};



class GroupRight extends React.Component {
  newRsvp(group, rsvp, i) {
    let {user} = rsvp;
    let now = new Date();
    let then = new Date(rsvp.time);
    let days = Date.daysBetween(then, now);
    return (
      <section className='groupright' key={i}>
        <h4>New rsvp</h4>
        <p>
          <UserSmall user={user} className='rfloat' />
          User {user.username} RSVPed {rsvp.response} for <Link to={`${group.dashName}/events/${rsvp.eventId}`}>{rsvp.eventTitle}</Link> {days} days ago
        </p>
      </section>
    );
  }

  newMember(group, item, i) {
    let {user} = item;
    let now = new Date();
    let then = new Date(item.time);
    let days = Date.daysBetween(then, now);
    return (
      <section className='groupright' key={i}>
        <h4>New member</h4>
        <p>
          <UserSmall user={user} className='rfloat' />
          User {user.username} joined {days} days ago
        </p>
      </section>
    );
  }

  printItem(group, item, i) {
    if (item.action === 'joined') return this.newMember(group, item, i);
    return this.newRsvp(group, item, i);
  }

  render() {
    let {group} = this.props;
    let {newItems} = group;
    return (
      <div className='groupright-holder white'>
        <section className='groupright'>
          <h3>What's New</h3>
        </section>

        {(newItems) ? newItems.map((item, i) => this.printItem(group, item, i)) : null}

      </div>
    );
  }
}

export default GroupRight;
