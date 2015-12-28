import { pushPath } from 'redux-simple-router';

export const fetchAndSelectBox = box => (
  dispatch => {
    dispatch({
      type: 'FETCH_BOX',
      box: box
    });
    dispatch({
      type: 'SELECT_EMAIL_TO_READ',
      index: 0
    });
    dispatch( 
            pushPath(`/${box}`)
           ); 
    dispatch({
      type: 'SELECT_BOX',
      box: box
    });
  }
);

export const selectEmailToRead = index => (
  {
    type: 'SELECT_EMAIL_TO_READ',
    index
  }
);

export const sendEmail = (to, text, subject) => (
  {
    type: 'SEND_EMAIL',
    to,
    text,
    subject,
    timestamp: new Date().toISOString()
  }
);

export const sendReply = (to, text, subject, thread_id) => (
  {
    type: 'SEND_REPLY',
    to,
    text,
    subject,
    thread_id,
    timestamp: new Date().toISOString()
  }
);

export const forwardEmail = (to, email) => (
  {
    type: 'FORWARD_EMAIL',
    email,
    to,
    timestamp: new Date().toISOString()
  }
);
