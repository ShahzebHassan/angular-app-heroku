import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-km-mile',
  templateUrl: './km-mile.component.html',
  styleUrls: ['./km-mile.component.css']
})
export class KmMileComponent {

  constructor() { }
  km!: number;
  miles!: number;

  converter() {
    this.miles = this.km * 0.621371

  }
  converter2() {
    this.km = this.miles / 0.621371
  }

}
