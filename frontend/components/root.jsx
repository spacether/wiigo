import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserFormContainer from './user/user_form_container';
import GroupShowContainer from './group/group_show_container';
import GroupFormContainer from './group/group_form_container';
import { clearErrors } from '../actions/error_actions';

import App from './app';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().user) replace("/");
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    if (!store.getState().user) replace("/");
  };

  const _clearErrors = (formName) => {
    return () => store.dispatch(clearErrors(formName));
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="login(/:name)" component={ UserFormContainer }
            onEnter={ _redirectIfLoggedIn }
            onLeave={ _clearErrors('logIn') } ></Route>
          <Route path="signup" component={ UserFormContainer }
            onEnter={ _redirectIfLoggedIn }
            onLeave={ _clearErrors('signUp') } ></Route>
          <Route path="create" component={ GroupFormContainer }
            onEnter={ _redirectIfLoggedOut }
            onLeave={ _clearErrors('createGroup') } ></Route>
          <Route path=":dashname" component={ GroupShowContainer }></Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
