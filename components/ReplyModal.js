import React from 'react';
import { Modal } from './shared/Modal';

export const ReplyModal = ({
  onClick
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
      onClick(text);
    }}
    buttonName="Send"
  />
};
