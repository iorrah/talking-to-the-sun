import Conversor from './conversor.js';

let getPresentableDetails = (item, units) => {
  let temperature, celsiusClass, fahrenheitClass;
  let main = item.main;

  if (units.celsius) {
    temperature = Conversor.tKelvin2tCelcius(main.temp);
    celsiusClass = 'active';
    fahrenheitClass = '';
  } else if (units.fahrenheit) {
    temperature = Conversor.tKelvin2tFahrenheit(main.temp);
    celsiusClass = '';
    fahrenheitClass = 'active';
  }

  return {
    temperature: temperature,
    celsius_class: celsiusClass,
    fahrenheit_class: fahrenheitClass,
  }
}

export default getPresentableDetails;
