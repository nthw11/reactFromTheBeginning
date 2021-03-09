import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('test');
    }, 500);
  }
  componentWillUnmount() {
    console.log('modal is about to be unmounted');
    clearInterval(this.timer);
  }
  render() {
    return (
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>{this.props.cityName}</h4>
          <p>High: {this.props.high}</p>
          <p>Low: {this.props.low}</p>
          <p>
            {this.props.weather}
            <img src={this.props.iconUrl} alt='' />
          </p>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Great!
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
