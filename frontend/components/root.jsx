import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserFormContainer from './user/user_form_container';

 ADD ONLEAVE THAT CLEARS ERRORS
 ADD ONLEAVE THAT CLEARS ERRORS
 ADD ONLEAVE THAT CLEARS ERRORS


// custom
import App from './app';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().user) replace("/");
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/login" component={ UserFormContainer }
             onEnter={ _redirectIfLoggedIn } />
           <Route path="/signup" component={ UserFormContainer }
             onEnter={ _redirectIfLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
