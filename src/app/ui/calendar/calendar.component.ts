import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.generateData();
    console.log(this.dataService.viewData);
    // this._initDates(new Date("2020-01-01"), new Date("2020-01-07"));
  }

  public get calendarData() {
    return this.dataService.viewData;
  }

  // private _initDates(startDate: Date, endDate: Date) {
  //   const diff = endDate.getDate() - startDate.getDate();
  //   for(let i=0; i<diff; i++) {
  //     const newDate = new Date();
  //     newDate.setDate(startDate.getDate() + i);
  //     this.dates.push(newDate);
  //   }
  // }

}
