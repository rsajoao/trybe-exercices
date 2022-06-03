const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperature, delay) => {
    setTimeout(() => {
        console.log(`Mars temperature is: ${temperature} degree Celsius.
        Delay time: ${delay}ms.`);
    }, delay);
};

sendMarsTemperature(getMarsTemperature(), messageDelay());