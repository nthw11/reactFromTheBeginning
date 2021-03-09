import React, { Component } from 'react';

class EventAndState extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }
  handleClick = () => {
    // console.log('test test test');
    this.setState({
      inputText: '',
    });
  };
  handleChange = (event) => {
    // console.dir(event.target);
    this.setState({
      inputText: event.target.value,
    });
    console.log(this.state.inputText);
  };
  handleSubmit = (event) => {
    console.log('form submitted');
    this.setState({
      inputText: 'stay in school',
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>{this.state.inputText}</h1>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick} className='btn'>
            Click Me
          </button>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='enter some text'
            name=''
            id=''
          />
        </form>
      </div>
    );
  }
}

export default EventAndState;
