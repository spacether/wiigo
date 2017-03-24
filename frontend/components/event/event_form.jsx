import React from 'react';
import { hashHistory, Link } from 'react-router';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      group_id: props.group.id,
      title: '',
      start_time: new Date(),
      description: '',
      location: '',
      address: ''
    };
  }
  componentWillReceiveProps(nextProps){
    let {user} = nextProps;
    if (!user) {
      hashHistory.push(`/`);
    }
  }
  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }
  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.createEvent(this.state);
    };
  }
  render(){
    let { title, start_time, description, location, address } = this.state;
    let { errors } = this.props;
    if (errors) {
      errors = errors.map( (error, i) => <li key={i}>{error}</li>);
      errors = (<ul className='error'>{errors}</ul>);
    }
    return (
      <section className='groupcreatebg'>
        <form className='creategroup' >
          <h2>Create an Event</h2>
          {errors}
          <label>Title
            <input type='text'
              value={title}
              onChange={this.update('title')} ></input>
          </label>
          <label>Start Time
            <input type='datetime'
              value={start_time}
              onChange={this.update('start_time')} ></input>
          </label>
          <label>Location
            <input type='text'
              value={location}
              onChange={this.update('location')} ></input>
          </label>
          <label>Address
            <input type='text'
              value={address}
              onChange={this.update('address')} ></input>
          </label>
          <label>Description
            <textarea name="description"
              rows="8" cols="80" value={description}
              onChange={this.update('description')}>
            </textarea>
          </label>
          <button name='submit' onClick={this.handleSubmit()}>
            Create Event
          </button>
        </form>
      </section>
    );
  }
}

export default EventForm;
