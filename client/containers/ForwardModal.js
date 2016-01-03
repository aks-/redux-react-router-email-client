import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { forwardEmail } from '../actionCreators';

const mapStateToProps = (state) => {
  const { emails, selectedBox, selectedEmailIndex } = state;
  const selectedEmails = emails.get(selectedBox).toArray();
  const selectedEmail = selectedEmails[selectedEmailIndex];
  const html = selectedEmail.getIn(['message', 'html']);
  const text = selectedEmail.getIn(['message', 'text']);
  const subject = selectedEmail.getIn(['message', 'subject']);
  const { userInfo } = state;
  const { modalDisplay } = state;
  const display = modalDisplay.get('forwardDisplay');

  return {
    html,
    text,
    subject,
    from: userInfo,
    display
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (to, html, text, subject, from) => {
      dispatch(
        forwardEmail(to, html, text, subject, from)
      );
    },
    onCancelClick: () => {
      dispatch({
        type: 'HIDE_FORWARD_DISPLAY'
      })
    }
  };
};

const ForwardModal = ({
  display,
  from,
  html,
  text,
  subject,
  onButtonClick,
  onCancelClick
}) => {
  const refs = {};

  return <Modal
    idName="forward-email-content"
    display={display}
    dropDownElements={[
      'ashok@snake-eyes.com',
      'aria@snake-eyes.com',
      'fishrock123@snake-eyes.com',
      'dan@snake-eyes.com',
      'pete@snake-eyes.com'
    ]}
    elements={[{
      isDropDown: true,
      label: 'To',
      ref: node => {
        refs['to'] = node;
      },
      id: 'compose-email-to',
      placeholder: ''
    }]}
    onButtonClick={e => {
      e.preventDefault();
      const to = refs.to ? refs.to.value.split(',') : null;
      if (!(to && to.length > 0))
        alert('Please specify atleast one email id');
      onButtonClick(to, html, text, subject, from);
      refs.to.value = '';
    }}
    onCancelClick={e => {
      e.preventDefault();
      onCancelClick();
    }}
    buttonName="Send"
  />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForwardModal);
