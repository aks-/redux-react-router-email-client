import React from 'react';
import { EmailItem } from './EmailItem';

export const EmailList = ({
  emails,
  onEmailItemClick,
  selected
}) => (
  <div className="pure-u id-list"> 
    <div className="content">
      {emails ? emails.map((email, i) => {
        return <EmailItem
          onClick={() => {
            onEmailItemClick(i);
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
);

