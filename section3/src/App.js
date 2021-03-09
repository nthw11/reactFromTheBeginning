import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Headers from './Headers';
import Modal from './Modal';

class App extends Component {
  constructor() {
    console.log('constructor running');
    super();
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      isRaining: '',
      showModal: true,
    };
  }
  componentDidMount() {
    this.getCityWeather('Raleigh');
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes('rain');
      if (isRaining) {
        this.setState({
          isRaining: 'rain rain rain rain',
        });
      }
    }
  }
  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city);
  };
  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=61ade5d46b78be06898c05053af40437`;
    axios.get(url).then((resp) => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name,
        placeholderText: 'search for a city',
      });
    });
  };
  removeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    console.log('rendered');
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}.png`;
    return (
      <div className='App'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <button onClick={this.removeModal} className='btn'>
              Remove from DOM
            </button>
            <Headers
              temp={this.state.temp}
              isRaining={this.state.isRaining}
              cityName={this.state.cityName}
            />

            <a
              className='waves-effect waves-light btn modal-trigger'
              href='#modal1'
            >
              Details?
            </a>
            <form onSubmit={this.searchCity}>
              <input
                id='city'
                type='text'
                placeholder={this.state.placeholderText}
              />
            </form>
          </div>
        </div>
        {this.state.showModal ? (
          <Modal
            iconUrl={iconUrl}
            weather={this.state.weather}
            cityName={this.state.cityName}
            low={this.state.low}
            high={this.state.high}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
