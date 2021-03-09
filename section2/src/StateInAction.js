import React, { Component } from 'react';

class StateInAction extends Component {
  constructor() {
    super();
    this.state = {
      text: 'State in action',
    };
    setTimeout(() => {
      this.setState({
        text: 'state changed',
      });
    }, 2000);
  }
  render() {
    return (
      <h1>
        {this.state.text} - {this.props.name}{' '}
      </h1>
    );
  }
}

export default StateInAction;
