import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Map, List, fromJS } from 'immutable';
import generateRandomString from './lib/generateRandomString';
import { fetchInbox, fetchSentItems, fetchUnread } from './lib/fetchDocuments';
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

const FETCH_BOX = 'FETCH_BOX';
const SEND_EMAIL = 'SEND_EMAIL';
const SELECT_BOX = 'SELECT_BOX';
const SELECT_EMAIL_TO_READ = 'SELECT_EMAIL_TO_READ';
const SEND_REPLY = 'SEND_REPLY';
const FORWARD_EMAIL = 'FORWARD_EMAIL';

const reducer = (state = fromJS({
  selectedEmailIndex: 0,
  selectedBox: 'inbox',
  userInfo: { email: 'a@example.com', name: 'A'
  },
  emails: {
    inbox: fetchInbox('a@example.com'),
    outbox: List([]),
    sent: List([])
  },
  unread: fetchUnread('a@example.com')
}), action) => {
  switch (action.type) {
    case SELECT_EMAIL_TO_READ:
      return state.set('selectedEmailIndex', action.index);
    case FORWARD_EMAIL:
      const email = action.email;
      const forwardedEmail = {
        id: generateRandomString(),
        message: {
          "html": `<p>begin forwarded message</p></br>${email.getIn(['message', 'html'])}`,
          "text": `being forwarded message --- ${email.getIn(['message', 'text'])}`,
          "subject": email.getIn(['message', 'subject']),
          "from": state.getIn(['userInfo']),
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": state.getIn(['userInfo', 'email'])
          },
          "important": false
        }
      };
      const items = state.getIn(['emails', 'sent']);
      if (items && items.size) {
        return state.updateIn(['emails', 'sent'], list => list = list.push(fromJS(forwardedEmail)));
      } else {
        return state.setIn(['emails', 'sent'], fromJS(fetchSentItems('a@example.com'))).
          updateIn(['emails', 'sent'], list => list.push(fromJS(forwardedEmail)));
      };
    case SEND_REPLY:
      var email = {
        id: generateRandomString(),
        thread_id: action.thread_id,
        message: {
          "html": `<p>${action.text}</p>`,
          "text": action.text,
          "subject": action.subject,
          "from": state.getIn(['userInfo']),
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": action.replyTo
          },
          "important": false
        }
      };
      const sentItems = state.getIn(['emails', 'sent']);
      if (sentItems && sentItems.size) {
        return state.updateIn(['emails', 'sent'], list => list = list.push(fromJS(email)));
      } else {
        return state.setIn(['emails', 'sent'], fromJS(fetchSentItems('a@example.com'))).
          updateIn(['emails', 'sent'], list => list.push(fromJS(email)));
      };
    case SEND_EMAIL: 
      var email = {
        id: generateRandomString(),
        message: {
          "html": `<p>${action.text}</p>`,
          "text": action.text,
          "subject": action.subject,
          "from": state.getIn(['userInfo']),
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": action.replyTo
          },
          "important": false
        }
      };
      const existingSentItems = state.getIn(['emails', 'sent']);
      if (existingSentItems && existingSentItems.size) {
        return state.updateIn(['emails', 'sent'], list => list = list.push(fromJS(email)));
      } else {
        return state.setIn(['emails', 'sent'], fromJS(fetchSentItems('a@example.com'))).
          updateIn(['emails', 'sent'], list => list.push(fromJS(email)));
      }
      case FETCH_BOX:
        switch (action.box) {
          case 'inbox':
            return state.updateIn([
              'emails',
              action.box],
              value =>
              (value && value.size > 0) ?
                value :
                  fromJS(fetchInbox('a@example.com')))
                case 'sent':
                  return state.updateIn([
                    'emails',
                    action.box],
                    value =>
                    (value && value.size > 0) ?
                      value :
                        fromJS(fetchSentItems('a@example.com')))
        }
      case SELECT_BOX:
        switch (action.box) {
          case 'inbox':
            return state.set('selectedBox', action.box);
          case 'sent':
            return state.set('selectedBox', action.box);
        }
      default:
        return state;
  }
};

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
