import React from 'react';
import GroupLeft from '../group/group_left';
import SquareImage from '../shared/square_image';
import { Link } from 'react-router';

function formatTimeHHMMA(d) {
  const z = (n) => { return (n<10?'0':'')+n; };
  var h = d.getHours();
  return (h%12 || 12) + ':' + z(d.getMinutes()) + ' ' + (h<12? 'AM' :'PM');
}

class GroupShow extends React.Component {
  componentDidMount(){
    this.props.fetchEvent();
  }

  printMember(user, i) {
    return (
      <div className='margined' key={i}>
        <SquareImage item={user} path={`/members/${user.id}`}
          size={[36,36]} className='uprow inlineimg' name={true} />
      </div>
    );
  }

  rsvpSection(user, rsvpsHash) {
    let {event} = this.props;
    let defaultVal = (
      <div className='padded'>
        <h3>RSVPs</h3>
      </div>
    );
    if (event === undefined) return defaultVal;

    let inPast = (new Date() > new Date(event.startTime));
    if (!user || inPast) {
      return defaultVal;
    } else if (!event.group.memberIds.includes(user.id)) {
      return defaultVal;
    } else {
      let rsvp = rsvpsHash[user.id];
      let {createRsvp, updateRsvp, fetchEvent} = this.props;
      if (rsvp === undefined) {
        return (
          <div className='padded'>
            <h3 className='botmarg'>Are you going?</h3>
            <Link className='button signup rmargin'
              onClick={() => createRsvp(true).then(() => fetchEvent() )}>
              Yes
            </Link>
            <Link className='button signup'
              onClick={() => createRsvp(false).then(() => fetchEvent() )}>
              No
            </Link>
          </div>
        );
      } else {
        return (
          <div className='padded'>
            <h3 className='botmarg'>You rsvped:</h3>
            { (rsvp) ? <Link className='button botmarg'>Yes</Link> : <Link className='button botmarg'>No</Link>  }
            <Link className='button signup'
              onClick={() => updateRsvp(!rsvp).then(() => fetchEvent() )}>
              Change RSVP</Link>
          </div>
        );
      }
    }
  }

  render() {
    let {event, user} = this.props;
    if (!event) {
      return (
        <div className='groupshow'>
          <div className='fullwide white padded'>Event not found</div>
        </div>
      );
    } else {
      let {group} = event;
      let {organizer} = event;
      let mapLink = "https://maps.google.com/maps?f=q&hl=en&q="+encodeURI(event.address);
      let inPast = (new Date() > new Date(event.startTime));
      let verb = (inPast) ? "went" : "going";
      let startDate = new Date(event.startTime);
      let textTime = startDate.toDateString()+', '+formatTimeHHMMA(startDate);
      return (
        <div className='groupshow'>

          <GroupLeft group={group} />

          <div className='fullwide flexrow'>

            <div className='groupmiddle-holder white padded botline inside_divbmargin'>
              <div>
                <h2>{event.title}</h2>
              </div>
              <div>
                <h3>Start time: {textTime}</h3>
                <h3>{event.location}</h3>
                <h4><a href={mapLink}>{event.address}</a></h4>
              </div>

              <div>
                {event.description}
              </div>
              <div>
                Hosted by <Link to={`members/${organizer.id}`}>
                  {organizer.username}
                </Link>
              </div>
            </div>

            <div className='groupright-holder white'>

              {this.rsvpSection(user, event.rsvps)}

              <section className='padded'>
                <h3>{event.attendees.length} {verb}</h3>
                {event.attendees.map((person, i) => this.printMember(person, i))}
              </section>

            </div>

          </div>
        </div>
      );
    }
  }
}

export default GroupShow;
