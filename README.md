# Weather Application
   Weather app is to display the weather of a selected city.
   <ul>
  <li>Implement the search bar where we can enter the name of the city.</li>
  <li>When we will click on the search button it will show the weather detail like current temprature, description, pressure and Humidity with image.</li>
  <li>Implement Open Weather Map API.</li>
  <li>Designed the search bar with weather section where I have displayed the selected city weather.</li>
  </ul>
  
## Technologies and Web Tools
    React Js, HTML, CSS, API, Visual Studio Code

## API URL
https://api.openweathermap.org/data/2.5/weather

## Setup
To run this project, install it locally using npm:
```jsx
npm install 
npm start
```

## Weather API
```jsx
//Weather APP ID and URL
const APP_ID  = "d358c8db9ddce5fcd36ec299ec58041f"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

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
```
