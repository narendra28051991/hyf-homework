const key = config['weather'];
const unit = 'metric';

// get weather information
const getWeather = async (lat, lon) => {
  
  const base = 'http://api.openweathermap.org/data/2.5/weather';
  const query = `?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;

};

// get city information
const getCity = async (city) => {

  const base = 'http://api.openweathermap.org/geo/1.0/direct';
  const query = `?q=${city}&units=${unit}&appid=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

// get current location
const getLocation = async (lat, lon) => {

  const base = 'http://api.openweathermap.org/geo/1.0/reverse';
  const query = `?lat=${lat}&lon=${lon}&appid=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};
