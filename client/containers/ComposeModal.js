import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components/shared/Modal';
import { sendEmail } from '../actionCreators';

const mapStateToProps = (state) => {
  const { userInfo } = state;
  const { modalDisplay } = state;
  const display = modalDisplay.get('composeDisplay');

  return {
    from: userInfo,
    display
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (to, text, subject, from) => {
      dispatch(
        sendEmail(to, text, subject, from)
      )
    },
    onCancelClick: () => {
      dispatch({
        type: 'HIDE_COMPOSE_DISPLAY'
      })
    }
  };
};

const ComposeModal = ({
  from,
  display,
  onButtonClick,
  onCancelClick
}) => {
  const refs = {};
  return <Modal
    idName="compose-email-content"
    display={display}
    dropDownElements={[
      'aria@snake-eyes.com',
      'fishrock123@snake-eyes.com',
      'dan@snake-eyes.com',
      'pete@snake-eyes.com',
      'ashok@snake-eyes.com'
    ]}
    elements={[{
      isDropDown: true,
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
      onButtonClick(to, text, subject, from);
      Object.keys(refs).forEach((x) => {
        refs[x].value = '';
      });
    }}
    onCancelClick={e => {
      e.preventDefault();
      onCancelClick();
    }}
    buttonName="Send"
  />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeModal);
