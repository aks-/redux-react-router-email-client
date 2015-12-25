import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { sendEmail } from '../actionCreators';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (to, text, subject) => {
      dispatch(
        sendEmail(to, text, subject)
      )
    }
  };
};

const ComposeModal = ({
  onButtonClick
}) => {
  const refs = {};
  return <Modal
    idName="compose-email-content"
    elements={[{
      label: 'To',
      ref: node => {
        refs['to'] = node;
      },
      id: 'compose-email-to',
      placeholder: ''
    }, {
      label: 'Subject',
      ref: node => {
        refs['subject'] = node;
      },
      id: 'compose-email-subject',
      placeholder: ''
    }, {
      label: '',
      ref: node => {
        refs['text'] = node;
      },
      id: 'compose-email-body',
      placeholder: ''
    }]}
    onButtonClick={e => {
      e.preventDefault();
      const text = refs.text.value || '';
      const subject = refs.subject.value || '';
      const to = refs.to ? refs.to.value.split(',') : null;
      if (!(to && to.length > 0))
        alert('Please specify atleast one email address');
      onButtonClick(to, text, subject);
      panel.hide();
    }}
    buttonName="Send"
  />;
};

export default connect(
  null,
  mapDispatchToProps
)(ComposeModal);
