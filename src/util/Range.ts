export default class Range {
  constructor(public start: number, public end: number) {
  }

  accepts(number: number) {
    if (number < this.start && number < this.end) {
      return true;
    } else {
      return false;
    }
  }
}
