import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserFormContainer from './user/user_form_container';
import { clearErrors } from '../actions/error_actions';

import App from './app';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().user) replace("/");
  };

  const _clearErrors = () => {
    store.dispatch(clearErrors());
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/login" component={ UserFormContainer }
            onEnter={ _redirectIfLoggedIn }
            onLeave={ _clearErrors }  />
           <Route path="/signup" component={ UserFormContainer }
            onEnter={ _redirectIfLoggedIn }
            onLeave={ _clearErrors } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
