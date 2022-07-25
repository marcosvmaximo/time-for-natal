export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get week() {
    const week = this._timeStampDiff / (7 * 24 * 60 * 60 * 1000);
    return week.toFixed(0);
  }

  get days() {
    const days = this._timeStampDiff / (24 * 60 * 60 * 1000);
    return days.toFixed(0);
  }
  
  get hours() {
    const hours = this._timeStampDiff / (60 * 60 * 1000);
    return hours.toFixed(0);
  }

  get minutes() {
    const minutes = this._timeStampDiff / (60 * 1000);
    return minutes.toFixed(0);
  }

  get seconds() {
    const seconds = this._timeStampDiff / 1000;
    return seconds.toFixed(0);
  }

  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days, hours, minutes, seconds
    }
  }
}
