import React, { Component } from 'react';

export class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      imageWidth: '',
    };
  }
  handleFocus = () => {
    this.setState({
      message: 'you agree to tos',
    });
  };
  handleMouseEnter = () => {
    this.setState({
      message: '',
    });
  };
  imageLoad = (event) => {
    if (event.target.width > 100) {
      console.log('your image is large');
    }
  };

  render() {
    return (
      <div>
        <input onFocus={this.handleFocus} type='text' />
        <h3 onMouseEnter={this.handleMouseEnter}>{this.state.message}</h3>
        <img
          onLoad={this.imageLoad}
          src='https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg'
          alt=''
        />
      </div>
    );
  }
}

export default StatePractice;
