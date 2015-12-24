import {
  Map,
  List,
  fromJS
} from 'immutable';
import generateRandomString from '../lib/generateRandomString';
import { emails } from './emails';

const FETCH_BOX = 'FETCH_BOX';
const SEND_EMAIL = 'SEND_EMAIL';
const SELECT_BOX = 'SELECT_BOX';
const SELECT_EMAIL_TO_READ = 'SELECT_EMAIL_TO_READ';
const SEND_REPLY = 'SEND_REPLY';
const FORWARD_EMAIL = 'FORWARD_EMAIL';

import { 
  fetchInbox,
  fetchSentItems,
  fetchUnread
} from '../lib/fetchDocuments';

export const reducer = (state = fromJS({
  selectedEmailIndex: 0,
  selectedBox: 'inbox',
  userInfo: {
    email: 'a@example.com',
    name: 'A'
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
    case SEND_REPLY:
    case SEND_EMAIL: 
    case FETCH_BOX:
      return state.set(
        'emails',
        emails(state.get('emails'), action)
      );
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

