import React, { Component } from 'react';
import { Main } from '../components/Main';
import { connect } from 'react-redux';
import { logout } from '../actionCreators';

const mapStateToProps = (state) => {
  const { selectedBox, emails, selectedEmailIndex } = state;
  const selectedEmail = emails.get(selectedBox).toArray()[selectedEmailIndex];
  const name = selectedEmail.get([
    'message',
    'from',
    'name'
  ]);
  const subject = selectedEmail.getIn([
    'message',
    'subject'
  ]); 
  const timestamp = selectedEmail.getIn([
    'message',
    'timestamp'
  ]);
  const html = selectedEmail.getIn([
    'message',
    'html'
  ]);

  return {
    name,
    subject,
    timestamp,
    html,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOutClick: () => {
      dispatch(logout());
    },
    onForwardClick: () => {
      dispatch({
        type: 'SHOW_FORWARD_DISPLAY'
      });
    },
    onReplyClick: () => {
      dispatch({
        type: 'SHOW_REPLY_DISPLAY'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
