import { pushPath } from 'redux-simple-router';
import fetch from 'isomorphic-fetch';

export const login = (email) => (
  dispatch => 
  fetch('http://localhost:3000/get-user-info', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  })
  .then(response => response.json())
  .then(json => {
    dispatch({
      type: 'LOG_IN'
    });
    return json;
  })
  .then((info) => {
    dispatch({
      type: 'SET_USER_INFO',
      info
    });
    return info.email;
  })
  .then((email) => {
    dispatch(fetchAndSelectBox('inbox', email));
  })
  .then(() => {
    dispatch(fetchUnread(email))
  })
);

export const fetchAndSelectBox = (box, email) => (
  dispatch => 
  fetch(`http://localhost:3000/${box}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email
    })
  })
  .then(response => response.json())
  .then(json => {
        dispatch({
          type: 'FETCH_BOX',
          box: box,
          emails: json
        })
  }
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
  dispatch =>
  fetch('http://localhost:3000/compose', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to,
      text,
      subject,
    })
  })
  .then(response => response.json())
  .then(json => 
        dispatch({
          type: 'SEND_EMAIL',
          email: json
        })
       )
);

export const sendReply = (to, text, subject, thread_id, from) => (
  dispatch =>
  fetch('http://localhost:3000/reply', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to,
      text,
      subject,
      thread_id,
      from
    })
  })
  .then(response => response.json())
  .then(json => 
        dispatch({
          type: 'SEND_REPLY',
          reply: json
        })
       )
);

export const forwardEmail = (to, html, text, subject, from) => (
  dispatch =>
  fetch('http://localhost:3000/forward', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to,
      html,
      text,
      subject,
      from
    })
  })
  .then(response => response.json())
  .then(json => 
        dispatch({
          type: 'FORWARD_EMAIL',
          email: json
        })
       )
);

export const fetchUnread = (email) => (
  dispatch => {
    fetch(`http://localhost:3000/unread`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email
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
