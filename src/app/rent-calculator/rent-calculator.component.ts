import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rent-calculator',
  templateUrl: './rent-calculator.component.html',
  styleUrls: ['./rent-calculator.component.css']
})
export class RentCalculatorComponent implements OnInit {

  public maxValue: number = 100;
  public minValue: number = 0;
  ngOnInit(): void {

  }
  // profileForm = new FormGroup({
  //   rent: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000)]),
  //   increase: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
  //   years: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
  // });

  constructor() { }
  totalData: any = [{

    increase: {},

    years: {},

    rent: {},

    differencebase: [],

    difference: [],

    baseRent: [],

    total: [],

  }]
  calculate() {
    // debugger;
    this.totalData.total = [];
    this.totalData.differencebase = [];
    this.totalData.difference = [];
    this.totalData.baseRent = this.totalData.rent;
    let previousRent = this.totalData.rent;
    this.totalData.total.push(previousRent);
    this.totalData.differencebase.unshift(0);
    this.totalData.difference.unshift(0);
    for (let i = 1; i < this.totalData.years; i++) {
      const CurrentRent = previousRent * (1 + this.totalData.increase / 100);
      this.totalData.difference.push(Math.round((Math.abs(CurrentRent - previousRent) + Number.EPSILON) * 100) / 100);
      previousRent = CurrentRent;
      this.totalData.total.push(Math.round((CurrentRent + Number.EPSILON) * 100) / 100);
      this.totalData.differencebase.push(Math.round((Math.abs(CurrentRent - this.totalData.rent) + Number.EPSILON) * 100) / 100);
    }
  }


  // displayedColumns: string[] = ['years', 'rent', 'increase', 'difference', 'differencebase'];
  // // dataSource: any[] = [];
  // dataSource!: MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // ngOnInit(): void {

  // }

  // constructor() { }

  // increase: any;

  // years: any;

  // rent: any;

  // total: number[] = []; //declare an array

  // differencebase: number[] = [];

  // difference: number[] = [];

  // baseRent: number[] = [];

  // calculate() {
  //   // debugger;
  //   this.total = [];
  //   this.differencebase = [];
  //   this.difference = [];
  //   let previousRent = this.rent;
  //   this.baseRent = this.rent;
  //   this.total.push(previousRent);
  //   this.differencebase.unshift(0);
  //   this.difference.unshift(0);
  //   for (let i = 1; i < this.years; i++) {
  //     const CurrentRent = previousRent * (1 + this.increase / 100);
  //     this.difference.push(Math.round((Math.abs(CurrentRent - previousRent) + Number.EPSILON) * 100) / 100)
  //     previousRent = CurrentRent;
  //     this.total.push(Math.round((CurrentRent + Number.EPSILON) * 100) / 100);
  //     this.dataSource = new MatTableDataSource(this.total);

  //     this.differencebase.push(Math.round((Math.abs(CurrentRent - this.rent) + Number.EPSILON) * 100) / 100);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort

  //   }
  // }
}
