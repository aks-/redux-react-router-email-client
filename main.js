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
import { Nav } from './components/Nav';
import { EmailList } from './components/EmailList';
import { Reader } from './components/Reader';
import { ComposeModal } from './components/ComposeModal';
import { ReplyModal } from './components/ReplyModal';
import { ForwardModal } from './components/ForwardModal';
import { 
  fetchAndSelectBox,
  selectEmailToRead,
  sendEmail,
  sendReply,
  forwardEmail,
} from './actionCreators';
import { reducer } from './reducers/index';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const store = storeWithMiddleware(reducer);

const App = ({
  emails,
  selectedBox,
  unread,
  selectedEmailIndex = 0
}) => {
  const selectedEmails = emails.get(selectedBox);
  const selectedEmail = selectedEmails.get(selectedEmailIndex);
  return <div className="pure-g-r content id-layout">
    <Nav 
      unread={unread}
      onClick={(box) => {
        store.dispatch(fetchAndSelectBox(box));
      }}
    />
    <EmailList
      emails={selectedEmails}
      onEmailItemClick={(index) => {
        store.dispatch(selectEmailToRead(index));
      }}
      selected={selectedEmailIndex}
    />
    <Reader
      subject={
        selectedEmail.
          getIn([
            'message',
            'subject'
          ]) 
      }
      name={
        selectedEmail.
          getIn([
            'message',
            'from',
            'name'])
      }
      timestamp={
        selectedEmail.
          getIn([
            'message',
            'timestamp'])
      }
      html={
        selectedEmail.
          getIn([
            'message',
            'html'])
      }
    />
    <ComposeModal
      onClick={(to, text, subject) => {
        store.dispatch(sendEmail(to, text, subject));
        panel.hide();
      }}
    />
    <ReplyModal 
      onClick={(text) => {
        const email = selectedEmail.getIn([
          'message',
          'headers',
          'Reply-To'
        ]);
        const subject = selectedEmail.getIn([
          'message',
          'subject'
        ]);
        const thread_id = selectedEmail.get('thread_id');
        store.dispatch(
          sendReply(
            email,
            text,
            subject,
            thread_id
          ));
          replyPanel.hide();
      }}
    />
    <ForwardModal
      onClick={(to) => {
        store.dispatch(forwardEmail(to, selectedEmail));
        forwardPanel.hide();
      }}
    />
  </div>
};

const render = () => {
  const state = store.getState().toObject();
  const t = state.selectedBox;
  ReactDOM.render(
    <App {...state}/>,
    document.getElementById('app')
  );
};

render();

store.subscribe(render);
