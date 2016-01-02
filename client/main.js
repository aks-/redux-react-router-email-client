import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { 
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  Map,
  List,
  fromJS
} from 'immutable';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import Nav from './containers/Nav';
import EmailList from './containers/EmailList';
import Reader from './containers/Reader';
import ComposeModal from './containers/ComposeModal';
import ReplyModal from './containers/ReplyModal';
import ForwardModal from './containers/ForwardModal';
import Login from './containers/Login';
import { emailApp } from './reducers/emailApp';
import Root from './components/Root';
import { App } from './components/App';
import { 
  fetchAndSelectBox,
  fetchUnread
} from './actionCreators';

const storeWithMiddleware = applyMiddleware(
  thunk,
  createLogger()
)(createStore);

const history = createHistory();
const store = storeWithMiddleware(emailApp);

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root} >
        <IndexRoute component={Login} />
        <Route path="inbox" component={App} />
        <Route path="sent" component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

