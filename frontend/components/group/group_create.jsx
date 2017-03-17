import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router';

class GroupCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      hometown: 'San Francisco, Ca',
      topic_ids: []
    };
  }
  componentWillReceiveProps(nextProps){
    let {user} = nextProps;
    if (!user) {
      this.redirect();
    }
  }
  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }
  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let group = this.state;
      this.props.createGroup(group).then(() => this.redirect() );
    };
  }
  redirect() {
    this.props.router.push("/");
  }
  render(){
    let { name, description, hometown } = this.state;
    let { errors, topics } = this.props;
    // debugger;
    if (errors) {
      errors = errors.map( (error, i) => <li key={i}>{error}</li>);
      errors = (<ul className='error'>{errors}</ul>);
    }
    topics = topics.map((topic, ind) => (
      <label key={ind} className="topics">{topic.title}
        <input type='checkbox'
              value={topic.id}
              name="[topic_ids][]" />
      </label>
    ));
    return (
      <section>
        <form className='creategroup' >
          <h2>Create a Group</h2>
          {errors}
          <label>Name
            <input type='text' name='name'
              value={name}
              onChange={this.update('name')} ></input>
          </label>
          <label>Description
            <textarea name="description"
              rows="8" cols="80" value={description}
              onChange={this.update('description')}>
            </textarea>
          </label>
          <label>Hometown
            <input type='text' name='hometown'
              value={hometown}
              onChange={this.update('hometown')} ></input>
          </label>
          <div>
          {topics}
          </div>
          <button name='submit' onClick={this.handleSubmit()}>
            Create Group
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(GroupCreate);
