import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  private addValue;
  subValue;
  multiplyValue;
  constructor() { }

  add(a, b) {
    this.addValue = parseInt(a, 10) + parseInt(b, 10);
  }

  getAddValue() {
    return this.addValue;
  }


  substract(a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  }

  multiply(a, b) {
    return parseInt(a, 10) * parseInt(b, 10);
  }
}
