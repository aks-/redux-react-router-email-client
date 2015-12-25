import React from 'react';

export const Main = ({
  subject,
  name,
  timestamp,
  html
}) => (
  <div className="pure-u id-main"> 
    <div className="content">
      <div className="email-content pure-g">
        <div className="email-content-header pure-g">
          <div className="pure-u-1-2">
            <h1 className="email-content-title">{subject}</h1>
            <p className="email-content-subtitle">
              From <a>{name}</a> at <span>{timestamp}</span>
            </p>
          </div>
          <div className="pure-u-1-2 email-content-controls">
            <a id="reply-button" className="pure-button secondary-button" href="#">Reply</a>
            <a id="forward-button" className="pure-button secondary-button">Forward</a>
            <a className="pure-button secondary-button">Move to</a>
          </div>
        </div>
        <div className="email-content-body pure-u-1" dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  </div> 
);
