import React, { Component } from 'react';

class SimpleEvents extends Component {
  handleClick() {
    console.log('test test test');
  }
  handleChange() {
    console.log('ch-ch-ch-changes ');
  }
  handleSubmit(event) {
    console.log('form submitted');
    event.preventDefault();
  }
  render() {
    return (
      <div>
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

export default SimpleEvents;
