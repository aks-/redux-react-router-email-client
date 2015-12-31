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

  return {
    html,
    text,
    subject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (to, html, text, subject, from) => {
      dispatch(
        forwardEmail(to, html, text, subject, from)
      );
    }
  };
};

const ForwardModal = ({
  html,
  text,
  subject,
  onButtonClick
}) => {
  const refs = {};

  return <Modal
    idName="forward-email-content"
    elements={[{
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
      onButtonClick(to, html, text, subject, "hello@trello.com");
      forwardPanel.hide();
    }}
    buttonName="Send"
  />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForwardModal);
