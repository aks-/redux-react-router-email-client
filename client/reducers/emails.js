import {
  Map,
  List,
  fromJS
} from 'immutable';
import { sent } from './sent';

const FORWARD_EMAIL = 'FORWARD_EMAIL';
const SEND_REPLY = 'SEND_REPLY';
const SEND_EMAIL = 'SEND_EMAIL';
const FETCH_BOX = 'FETCH_BOX';
const LOG_OUT = 'LOG_OUT';

export const emails = (state = fromJS({
  inbox: List([]),
  outbox: List([]),
  sent: List([])
}), action) => {
  switch (action.type) {
    case LOG_OUT:
      return fromJS({
        inbox: List([]),
        outbox: List([]),
        sent: List([])
      })
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
