import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import UserFormContainer from '../user/user_form_container';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : 'none',
    background            : 'none'
  }
};

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  render(){
    let left, right;
    let {user, logout} = this.props;
    if (user) {
      left = (
        <nav className='left'>
          <Link to="/create" className='button newgroup'>Create  Group</Link>
        </nav>
      );
      right = (
        <nav className='right'>
          <span>Welcome {user.username}</span>
          <Link to={`members/${user.id}`} className='button'>Profile</Link>
          <Link onClick={() => {
              logout();
              hashHistory.push("/");
            }} className='button logout'>Log Out</Link>
        </nav>
      );
    } else {
      right = (
        <nav className='right'>
          <Link to="/login" className='button login'>Log In</Link>
          <Link to="/login/Guesty" className='button signup'>Guest</Link>
          <Link onClick={this.openModal} id='openModal'
            className='button signup'>Sign Up</Link>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <UserFormContainer closeModal={this.closeModal.bind(this)}>
            </UserFormContainer>
          </Modal>
        </nav>
      );
    }
    return (
      <header>
        {left}
        <span onClick={() => hashHistory.push("/")} className='logo'>
          Wiigo
        </span>
        {right}
      </header>
    );
  }
}

export default Header;
