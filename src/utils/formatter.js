let Formatter = {
  Date: {

    /*
      Format: 12:00
    */

    getHoursMinutes(date) {
      let object = new Date(date);
      let minutes = Formatter.String.pad(object.getMinutes(), 2);
      return `${object.getHours()}:${minutes}`;
    },

    /*
      Format: Wednesday
    */

    getWeekDay(date) {
      let object = new Date(date);

      const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      return weekDays[object.getDay()];
    },

    /*
      Format: Wed
    */

    getWeekDayAbbr(date) {
      return this.getWeekDay(date).substr(0, 3);
    },
  },

  String: {
    pad(n, width, z) {
      z = z || '0';
      n = n + '';

      return n.length >= width ?
        n :
        new Array(width - n.length + 1).join(z) + n;
    }
  }
};

export default Formatter;
