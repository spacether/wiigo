import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }
  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let user = this.state;
      this.props.processForm(user).then(() => this.redirect() );
    };
  }
  redirect() {
    this.props.router.push("/");
  }
  render(){
    let { username, password } = this.state;
    let { formType } = this.props;
    let buttonTxt = (formType === 'signUp') ? 'Sign Up' : "Log In";
    let otherPlace = (formType === 'signUp')
      ? ["/login", "Log In"] : ["/signup", "Sign Up"];
    let { errors } = this.props;
    if (errors.length > 0) {
      console.log(errors);
      errors = errors.map( (error, i) => <li key={i}>{error}</li>);
      errors = (<ul className='error'>{errors}</ul>);
    }
    return (
      <form>
        <h2>{buttonTxt}</h2>
        {errors}
        <label>Username
          <input type='text' name='username'
            value={username}
            onChange={this.update('username')} ></input>
        </label><br/>
        <label>Password
          <input type='password' name='password'
            value={password}
            onChange={this.update('password')} ></input>
        </label><br/>
        <button onClick={this.handleSubmit()}>{buttonTxt}</button>
        <br/><br/>
        <Link to={otherPlace[0]}>{otherPlace[1]}</Link>
      </form>
    );
  }
}

export default withRouter(UserForm);
