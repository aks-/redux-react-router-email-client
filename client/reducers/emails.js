import {
  Map,
  List,
  fromJS
} from 'immutable';
import generateRandomString from '../lib/generateRandomString';
import { 
  fetchInbox,
  fetchSentItems,
  fetchUnread
} from '../lib/fetchDocuments';
import { sent } from './sent';

const FORWARD_EMAIL = 'FORWARD_EMAIL';
const SEND_REPLY = 'SEND_REPLY';
const SEND_EMAIL = 'SEND_EMAIL';
const FETCH_BOX = 'FETCH_BOX';

export const emails = (state = fromJS({
  inbox: List([]),
  outbox: List([]),
  sent: List([])
}), action) => {
  switch (action.type) {
    case FORWARD_EMAIL:
    case SEND_REPLY:
    case SEND_EMAIL:
      return state.set(
        'sent',
        sent(state.get('sent'), action)
      );
    case FETCH_BOX:
      switch (action.box) {
        case 'inbox':
        case 'sent':
          return state.set(
            action.box,
            sent(state.get(action.box), action)
          );
      }
    default:
      return state;
  }
};
