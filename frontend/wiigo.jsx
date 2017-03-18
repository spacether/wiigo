import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { user: window.currentUser };
  }
  let store = configureStore(preloadedState);
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  Object.assign(window, {login, logout, signup, store});
});
