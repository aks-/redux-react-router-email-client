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

const FORWARD_EMAIL = 'FORWARD_EMAIL';
const SEND_REPLY = 'SEND_REPLY';
const SEND_EMAIL = 'SEND_EMAIL';
const FETCH_BOX = 'FETCH_BOX';

export const sent = (state = List([]), action) => {
  switch (action.type) {
    case FORWARD_EMAIL:
      const email = action.email;
      const forwardEmail = {
        id: generateRandomString(),
        message: {
          "html": `<p>begin forwarded message</p></br>${email.getIn(['message', 'html'])}`,
          "text": `being forwarded message --- ${email.getIn(['message', 'text'])}`,
          "subject": email.getIn(['message', 'subject']),
          "from": {
            name: 'A',
            email: 'a@example.com'
          }, //TODO how to resolve this
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": {
              "name": "A",
              "email": "a@example.com"
            }
          },
          "important": false
        }
      };
      if (state.size > 0) 
        return state.push(fromJS(forwardEmail));
      return List(fromJS(fetchSentItems('a@example.com'))).
        push(fromJS(forwardEmail));
    case SEND_REPLY:
      const reply = {
        id: generateRandomString(),
        thread_id: action.thread_id,
        message: {
          "html": `<p>${action.text}</p>`,
          "text": action.text,
          "subject": action.subject,
          "from": {
            "name": "A",
            "email": "a@example.com"
          }, //TODO how to resolve this
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": action.replyTo
          },
          "important": false
        }
      };
      if (state.size > 0)
        return state.push(fromJS(reply));
      return List(fromJS(fetchSentItems('a@example.com'))).
        push(fromJS(reply));
    case SEND_EMAIL:
      const composedEmail = {
        id: generateRandomString(),
        message: {
          "html": `<p>${action.text}</p>`,
          "text": action.text,
          "subject": action.subject,
          "from": {
            "name": "A",
            "email": "a@example.com"
          }, //TODO how to resolve this
          "unread": true,
          "to": action.to,
          "timestamp": action.timestamp,
          "headers": {
            "Reply-To": action.replyTo
          },
          "important": false
        }
      };
      if (state.size > 0)
        return state.push(fromJS(composedEmail));
      return List(fromJS(fetchSentItems('a@example.com'))).
        push(fromJS(composedEmail));
    case FETCH_BOX:
       if (state.size > 0)
        return state;
      return List(fromJS(fetchSentItems('a@example.com')));
    default:
      return state;
  }
};
