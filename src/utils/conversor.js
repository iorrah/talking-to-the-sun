let Conversor = {
  tKelvin2tFahrenheit(tKelvin) {
    /*
      Convesion Formula:
      T(°F) = T(K) × 9/5 - 459.67
    */

    let tFahrenehit = (tKelvin * (9 / 5)) - 459.67;
    return Math.ceil(tFahrenehit);
  },

  tKelvin2tCelcius(tKelvin) {
    /*
      Convesion Formula:
      T(°C) = T(K) - 273.15
    */

    let tCelcius = (tKelvin - 273.15);
    return Math.ceil(tCelcius);
  }
};

export default Conversor;
