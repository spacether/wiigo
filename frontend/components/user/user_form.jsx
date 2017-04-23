import React from 'react';
import { hashHistory, Link } from 'react-router';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      logIn: props.logIn
    };
  }

  componentDidMount(){
    if (this.props.params) {
      let {name} = this.props.params;
      if (name) {
        this.guestLogin(name);
      }
    }
  }

  componentWillReceiveProps(nextProps){
    let {params} = nextProps;
    let name = (params) ? params.name : undefined;
    let path = this.props.location.pathname;
    let newPath = nextProps.location.pathname;
    let toLogin = (nextProps.logIn === true);
    if (Boolean(name) && (path !== newPath) && toLogin ) {
      this.guestLogin(name);
    }
  }

  update(property) {
    return (e) => ( this.setState({ [property]: e.target.value }));
  }

  handleSubmit() {
    const goToLanding = () => {
      if (this.props.closeModal) this.props.closeModal();
      hashHistory.push("/");
    };
    return (e) => {
      e.preventDefault();
      let user = Object.assign({}, this.state);
      if (user.logIn) {
        this.props.login(user).then(goToLanding);
      } else {
        user.image_url = "v1490361262/m10_ax7t8o.jpg";
        this.props.signup(user).then(goToLanding);
      }
    };
  }

  guestLogin(name){
    const callback = (arr, time) => {
      if (arr.length > 0) {
        let newState = Object.assign({}, this.state);
        let letter = arr.shift();
        newState.password += letter;
        newState.username += letter;
        this.setState(newState);
        setTimeout(callback.bind(this), time, arr, time);
      } else {
        setTimeout(
          () => (document.getElementsByName("submit")[0].click()), 500);
      }
    };
    this.setState({username: '', password: ''});
    let arr = name.split('');
    let startDelay = 500;
    let keyTime = 100;
    setTimeout(callback.bind(this), startDelay, arr, keyTime);
  }

  render(){
    let { username, password } = this.state;
    let { logIn } = this.state;
    let buttonTxt, guestLink, otherLink;
    if (logIn) {
      buttonTxt = 'Log In';
      guestLink = (
        <Link onClick={() => this.guestLogin("Guesty")}
          className='button guestlogin'>
          Guest Login
        </Link>
      );
      otherLink = (
        <Link onClick={() => this.setState({logIn: false})}>
        Sign Up
        </Link>
      );
    } else {
      buttonTxt = 'Sign Up';
      otherLink = (
        <Link onClick={() => this.setState({logIn: true})}>
        Log In
        </Link>
      );
    }
    let inline = this.props.logIn;
    let heading = (inline) ? (<h1>{buttonTxt}</h1>) : (<h2>{buttonTxt}</h2>);
    let errors = (logIn) ? this.props.loginErrors : this.props.signupErrors;
    if (errors) {
      errors = errors.map( (error, i) => <li key={i}>{error}</li>);
      errors = (<ul className='error'>{errors}</ul>);
    }
    let formstyle = (inline) ? 'userform-inline' : 'userform-modal';
    let form  = (
      <form className={formstyle}>
        {heading}
        {errors}
        <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username'
            value={username}
            onChange={this.update('username')} ></input>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password'
            value={password}
            onChange={this.update('password')} ></input>
        <button name='submit'
          onClick={this.handleSubmit()}>
          {buttonTxt}
        </button>
        {guestLink}
        {otherLink}
      </form>
    );
    if (inline) {
      return(
        <section className='groupcreatebg'>
          {form}
        </section>
      );
    } else {
      return form;
    }
  }
}

export default UserForm;
