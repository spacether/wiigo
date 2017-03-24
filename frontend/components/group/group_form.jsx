import React from 'react';
import { hashHistory, Link } from 'react-router';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      hometown: 'San Francisco, Ca',
      topic_ids: [],
      image_url: 'v1490242827/group_def2_diks8y.jpg'
    };
  }
  componentWillReceiveProps(nextProps){
    let {user} = nextProps;
    if (!user) {
      hashHistory.push(`/`);
    }
  }
  updateIds() {
    return (e) => {
      let checked = e.target.checked;
      let id = e.target.value;
      let newArr = this.state.topic_ids;
      if (checked) {
        newArr = newArr.concat(id);
      } else {
        newArr = newArr.filter(item => (item!==id));
      }
      this.setState({ topic_ids: newArr });
      e.target.parentElement.classList.toggle('checkedlabel');
    };
  }
  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }
  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let group = this.state;
      let dashName = this.props.dashName(group.name);
      this.props.createGroup(group)
        .then(() => {
          hashHistory.push(`/${dashName}`);
        });
    };
  }
  render(){
    let { name, description, hometown } = this.state;
    let { errors, topics } = this.props;
    if (errors) {
      errors = errors.map( (error, i) => <li key={i}>{error}</li>);
      errors = (<ul className='error'>{errors}</ul>);
    }
    if (topics) topics = topics.slice(1);
    topics = topics.map((topic, ind) => (
      <label key={ind} >{topic.title}
        <input type='checkbox'
              value={topic.id}
              name="[topic_ids][]"
              onChange={this.updateIds()} />
      </label>
    ));
    return (
      <section className='groupcreatebg'>
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

export default GroupForm;
