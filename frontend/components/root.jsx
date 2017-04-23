import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/error_actions';

import UserFormContainer from './user/user_form_container';
import UserShowContainer from './user/user_show_container';

import GroupShowContainer from './group/group_show_container';
import GroupDetailBotRightContainer from
  './group/group_detailbotright_container';
import GroupFormContainer from './group/group_form_container';
import GroupMembersContainer from './group/group_members_container';
import GroupSearchContainer from './group_search/group_search_container';
import GroupEventsContainer from './group/group_events_container';

import EventDetailContainer from './event/event_detail_container';
import EventFormContainer from './event/event_form_container';

import RootContentContainer from './root/root_content_container';



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
          <IndexRoute component={ RootContentContainer }></IndexRoute>
          <Route path="login(/:name)" component={ UserFormContainer }
            onEnter={ _redirectIfLoggedIn }
            onLeave={ _clearErrors('logIn') } ></Route>
          <Route path="create" component={ GroupFormContainer }
            onEnter={ _redirectIfLoggedOut }
            onLeave={ _clearErrors('createGroup') } ></Route>
          <Route path="members(/:memberId)" component={ UserShowContainer } />
          <Route path="find(/:dashTopic)" component={ GroupSearchContainer } />
          <Route path=":dashName/events/:eventId" component={ EventDetailContainer } />
          <Route path=":dashName/events" component={ GroupEventsContainer } />
          <Route path=":dashName" component={ GroupShowContainer }>
            <IndexRoute component={ GroupDetailBotRightContainer } />
            <Route path="members" component={ GroupMembersContainer } />
            <Route path="new" component={ EventFormContainer } />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
