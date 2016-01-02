import React, { Component } from 'react';

export class Root extends Component {
  render() {
    const { children } = this.props;
    return (
      {children}
    );
  }
}
