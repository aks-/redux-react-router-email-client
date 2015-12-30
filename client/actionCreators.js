import { pushPath } from 'redux-simple-router';
import fetch from 'isomorphic-fetch';

export const fetchAndSelectBox = box => (
  dispatch => 
  fetch(`http://localhost:3000/${box}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "a@example.com"
    })
  })
  .then(response => response.json())
  .then(json => 
        dispatch({
          type: 'FETCH_BOX',
          box: box,
          emails: json
        })
       )
       .then(() => 
             dispatch({
               type: 'SELECT_EMAIL_TO_READ',
               index: 0
             })
            )
            .then(() => 
                  dispatch( 
                           pushPath(`/${box}`)
                          )
                 )
                 .then(() => 
                       dispatch({
                         type: 'SELECT_BOX',
                         box: box
                       })
                      )
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

export const fetchUnread = () => (
  dispatch => {
    fetch(`http://localhost:3000/unread`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "a@example.com"
      })
    })
    .then(response => response.json())
    .then(json => 
          dispatch({
            type: 'GET_UNREAD',
            unread: json
          })
         )
  }
);
