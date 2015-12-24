import React from 'react';
import { Modal } from './shared/Modal';

export const ForwardModal = ({
  onClick
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
      onClick(to);
    }}
    buttonName="Send"
  />
};
