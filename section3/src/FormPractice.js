import React, { Component } from 'react';

class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);
  };
  changeName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-sm-3'>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.changeName}
                value={this.state.name}
                type='text'
                placeholder='enter name'
                id='name'
              />
              <input type='submit' value='submit' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPractice;
