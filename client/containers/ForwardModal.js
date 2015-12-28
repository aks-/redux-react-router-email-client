import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { forwardEmail } from '../actionCreators';

const mapStateToProps = (state) => {
  const { emails, selectedBox, selectedEmailIndex } = state;
  const selectedEmails = emails.get(selectedBox).toArray();
  const selectedEmail = selectedEmails[selectedEmailIndex];

  return {
    selectedEmail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (to, selectedEmail) => {
      dispatch(
        forwardEmail(to, selectedEmail)
      );
    }
  };
};

const ForwardModal = ({
  selectedEmail,
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
      onButtonClick(to, selectedEmail);
      forwardPanel.hide();
    }}
    buttonName="Send"
  />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForwardModal);
