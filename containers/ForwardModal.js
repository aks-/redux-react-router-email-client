import React, { Component } from 'react';
import { Modal } from '../components/shared/Modal';
import { forwardEmail } from '../actionCreators';

export class ForwardModal extends Component {

  componentDidMount () {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const { store } = this.context;
    const refs = {};
    const { emails, selectedBox, selectedEmailIndex } = store.getState();
    const selectedEmails = emails.get(selectedBox).toArray();
    const selectedEmail = selectedEmails[selectedEmailIndex];
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
        store.dispatch(forwardEmail(to, selectedEmail));
        forwardPanel.hide();
      }}
      buttonName="Send"
    />
  }
}
ForwardModal.contextTypes = {
  store: React.PropTypes.object
};
