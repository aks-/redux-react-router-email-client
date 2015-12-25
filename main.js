import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { 
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  Map,
  List,
  fromJS
} from 'immutable';
import { Provider } from 'react-redux';
import { Nav } from './containers/Nav';
import { EmailList } from './containers/EmailList';
import { Reader } from './containers/Reader';
import { ComposeModal } from './containers/ComposeModal';
import { ReplyModal } from './containers/ReplyModal';
import { ForwardModal } from './containers/ForwardModal';
import { fetchAndSelectBox } from './actionCreators';
import { emailApp } from './reducers/emailApp';

const App = () => {
  return <div className="pure-g-r content id-layout">
    <Nav />
    <EmailList />
    <Reader />
    <ComposeModal />
    <ReplyModal />
    <ForwardModal />
  </div>
};

const storeWithMiddleware = applyMiddleware(thunk)(createStore);

const render = () => {
  ReactDOM.render(
    <Provider store={storeWithMiddleware(emailApp)}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

render();
