import React, { Component } from 'react';
import { EmailItem } from '../components/EmailItem';
import { selectEmailToRead } from '../actionCreators';

export class EmailList extends Component {

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
    const state = store.getState();
    const selectedBox = state.selectedBox;
    const emails = state.emails.get(selectedBox);
    const selected = state.selectedEmailIndex;
    return <div className="pure-u id-list"> 
      <div className="content">
        {emails ? emails.map((email, i) => {
          return <EmailItem
            onClick={() => {
              store.dispatch(selectEmailToRead(i));
            }}
            key={i}
            selected={selected === i}
            name={
              email.
                getIn([
                  'message',
                  'from',
                  'name'])
            }
            unread={false}
            subject={
              email.
                getIn([
                  'message',
                  'subject'])
            }>
            {
              email.
                getIn([
                  'message',
                  'text'])
            }
          </EmailItem>
          }) : ''}
        </div>
      </div> 
  }
}
EmailList.contextTypes = {
  store: React.PropTypes.object
};
