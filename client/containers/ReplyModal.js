import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { sendReply } from '../actionCreators';

const mapStateToProps = (state) => {
  const { emails, selectedBox, selectedEmailIndex } = state;
  const selectedEmails = emails.get(selectedBox).toArray();
  const selectedEmail = selectedEmails[selectedEmailIndex];
  const { userInfo } = state;
  
  return {
    selectedEmail,
    from: userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (
      email,
      text,
      subject,
      thread_id,
      from
    ) => {
      dispatch(
        sendReply(
          email,
          text,
          subject,
          thread_id,
          from
        )
      );
    }
  };
};

const ReplyModal = ({
  from,
  selectedEmail,
  onButtonClick
}) => {
  const refs = {};

  return <Modal
    idName="reply-email-content"
    elements={[{
      label: '',
      ref: node => {
        refs['text'] = node;
      },
      id: 'compose-email-body',
      placeholder: ''
    }]}
    onButtonClick={e => {
      e.preventDefault();
      const text = refs.text.value;
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
      onButtonClick(
        email,
        text,
        subject,
        thread_id,
        from
      );
      replyPanel.hide();
    }}
    buttonName="Send Reply"
  />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyModal);
