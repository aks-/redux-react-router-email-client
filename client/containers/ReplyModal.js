import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { sendReply } from '../actionCreators';

const mapStateToProps = (state) => {
  const { emails, selectedBox, selectedEmailIndex } = state;
  const selectedEmails = emails.get(selectedBox).toArray();
  const selectedEmail = selectedEmails[selectedEmailIndex];
  const { userInfo } = state;
   const { modalDisplay } = state;
  const display = modalDisplay.get('replyDisplay');
 
  return {
    display,
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
    },
    onCancelClick: () => {
      dispatch({
        type: 'HIDE_REPLY_DISPLAY'
      })
    }
  };
};

const ReplyModal = ({
  display,
  from,
  selectedEmail,
  onButtonClick,
  onCancelClick
}) => {
  const refs = {};

  return <Modal
    idName="reply-email-content"
    display={display}
    dropDownElements={[
      'aria@snake-eyes.com',
      'fishrock123@snake-eyes.com',
      'dan@snake-eyes.com',
      'pete@snake-eyes.com',
      'ashok@snake-eyes.com'
    ]}
    elements={[{
      isDropDown: false,
      label: '',
      ref: node => {
        refs['text'] = node;
      },
      id: 'compose-email-body',
      placeholder: ''
    }]}
    onCancelClick={e => {
      e.preventDefault();
      onCancelClick();
    }}
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
      refs.text.value = '';
    }}
    buttonName="Send Reply"
  />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyModal);
