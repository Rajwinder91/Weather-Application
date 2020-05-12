import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const axios  = require('axios');


//Weather APP ID and URL
const APP_ID  = "d358c8db9ddce5fcd36ec299ec58041f"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

//Start Weather Class
class WeatherComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName   : '',
            error      : null,
            weatherRes : []
        };
    }

    //Get Weather API data from openweathermap.org
    getWeatherInfo = () => {
        axios.get(`${API_URL}?q=${this.state.cityName}&appid=${APP_ID}`)
        .then(({ data }) => {
            this.setState({
                weatherRes : data
            })
        })
        .catch(({ error }) => {
            this.setState({
                error  : "Response Not found"
            })
        });
    }

    //Handle Enter city, country name inputs
    handleCityInputChange = () => {
        this.setState({
            cityName       : this.city.value,
        }, () => {
            if (this.state.cityName && this.state.cityName.length > 1) {
                this.getWeatherInfo()
            }else {
                this.setState({
                    error  : "Please fill the city name"
                })
            }
        })
    }

    //OnChange City name Handler
    handleInputChange = () => {
        if(this.city.value == ''){
            this.setState({
                weatherRes       : []
            })
        }
    }

    //Render the weather data here
    render() {
        const {error, cityName, weatherRes} = this.state
        if(weatherRes != ''){
            return(
                <div>
                    <form>
                        <input className="cityInput" placeholder="Search for..." ref={input => this.city = input} onChange = {this.handleInputChange}/>&nbsp;&nbsp;
                        <button type="button" className="searchBtn" onClick={this.handleCityInputChange}>Search</button>
                    </form>
                    <fieldset class="weatOpt">
                        <h2 className="cityN">{cityName} Weather</h2>
                        <img className="weatherIcon" src={"http://openweathermap.org/img/wn/"+weatherRes.weather[0].icon+".png"}/><br/>
                        <label>Current Temp : </label>{(weatherRes.main.temp-273.15).toFixed(2)} C <br/>
                        <label>Description :</label> {weatherRes.weather[0].description}<br/>
                        <label>Pressure : </label>{weatherRes.main.pressure} hPa<br/>
                        <label>Humidity : </label>{weatherRes.main.humidity} %<br/>
                    </fieldset>
                </div>
            )
        }else{
            return(
                <div>
                    <form>
                        <input className="cityInput"  placeholder="Search for..." ref={input => this.city = input}/>&nbsp;&nbsp;
                        <button type="button" className="searchBtn" onClick={this.handleCityInputChange}>Search</button>
                    </form>
                </div>
            )
        }
    }
  }

ReactDOM.render(<WeatherComponent />, document.getElementById('weatherResponse'));

