export function zeroPadding(value){
  return value < 10 ? `0${value}` : value;
}

export default class CountDown {
  constructor(leftTime) {
    this.leftTime = leftTime;
    this.currentTime = new Date().getTime();
  }

  getTimeRemaining() {
    let currentTime = new Date().getTime();
    this.leftTime -= currentTime  - this.currentTime;
    this.currentTime = currentTime;
    let miniSeconds =  Math.floor((this.leftTime % 1000) / 100);
    let seconds = Math.floor((this.leftTime / 1000) % 60);
    let minutes = Math.floor((this.leftTime / 1000 / 60) % 60);
    let hours = Math.floor((this.leftTime / (1000 * 60 * 60)) % 24);
    let days = Math.floor(this.leftTime / (1000 * 60 * 60 * 24));
    return {
      'total': this.leftTime,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      'miniSeconds': miniSeconds
    };
  }
}