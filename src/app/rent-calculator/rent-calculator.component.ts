import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-calculator',
  templateUrl: './rent-calculator.component.html',
  styleUrls: ['./rent-calculator.component.css']
})
export class RentCalculatorComponent {

  constructor() { }

  increase: any;

  years: any;

  rent: any;

  total: number[] = []; //declare an array


  calculate() {
    // debugger;
    this.total = [];
    let previousRent = this.rent;
    this.total.push(previousRent);
    for (let i = 1; i < this.years; i++) {
      const CurrentRent = previousRent * (1 + this.increase / 100);
      previousRent = CurrentRent;
      this.total.push(Math.round((CurrentRent + Number.EPSILON) * 100) / 100);
    }
  }
}
