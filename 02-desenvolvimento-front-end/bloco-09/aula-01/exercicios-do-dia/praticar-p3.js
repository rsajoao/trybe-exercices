const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}°F at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}°C at Mars`);

const sendMarsTemperature = (delay, temperature, callback) => {
    setTimeout(() => {
        callback(temperature);
        console.log(`Delay time: ${delay / 1000} seconds.`)
    }, delay);
};

sendMarsTemperature(messageDelay(), getMarsTemperature(), temperatureInFahrenheit);
sendMarsTemperature(messageDelay(), getMarsTemperature(), greet); 
