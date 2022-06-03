const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (delay, temperature, succeeded, notSucceded) => {
    const messageSucceeded = Math.random();
    setTimeout(() => {
        if (messageSucceeded <= 0.6) {
            succeeded(temperature);
        } else {
            notSucceded("Robot is busy.")
        }
        console.log(`Delay time: ${delay / 1000} seconds.
        `)
    }, delay);
};

sendMarsTemperature(messageDelay(), getMarsTemperature(), greet, handleError);
sendMarsTemperature(messageDelay(), getMarsTemperature(), temperatureInFahrenheit, handleError);