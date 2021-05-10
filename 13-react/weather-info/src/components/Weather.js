import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super();
    // What data is this component responsible for, which can change over time:
    this.state = {
      city: '', // this will be set by SearchForm
      weatherData: null // this will be populated via AJAX
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    console.log('Fetching', city);
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '87f3530b034ce83f07479771285f8bdf' // Thanks random Github user
    };

    axios.get(weatherURL, {params: weatherParams}).then((result) => {
      // On success simply save the data we got back
      // NB: axios provides your data in result.data, not just result.
      // console.log( result ); // is useful here.
      this.setState({weatherData: result.data});
    }, () => {
      // On failure we remove any old data and return to the starting value.
      this.setState({weatherData: null})
    });
  }

  render() {
    return (
      <div>
        <h1>Whether The Weather</h1>
        <SearchForm onSubmit={ this.fetchWeather } />
        <WeatherInfo data={ this.state.weatherData } />
      </div>
    )
  }
};

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    // The child component communicates its data (query) back to the parent
    // via this onSubmit callback.
    this.props.onSubmit( this.state.query );
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" onInput={this._handleInput} required placeholder="Glasgow" />
        <input type="submit" value="Get weather" />
      </form>
    );
  }
}


const WeatherInfo = (props) => {
  // Conditional rendering: we only show results once they're available.
  if (props && props.data === null) {
    return '';
  } else {
    return (
      <div>
        <h2>Weather for { props.data.name }</h2>
        <h3>Currently { props.data.main.temp }&deg;C</h3>
        <img src={`http://openweathermap.org/img/w/${ props.data.weather[0].icon }.png` } alt={props.data.weather[0].description} />
        <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
      </div>
    );
  }
}

export default Weather;
