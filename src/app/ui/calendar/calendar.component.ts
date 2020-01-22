import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  public dates: Date[] = [];

  constructor() { }

  ngOnInit() {
    this._initDates(new Date("2020-01-01"), new Date("2020-01-07"));
  }

  private _initDates(startDate: Date, endDate: Date) {
    const diff = endDate.getDate() - startDate.getDate();
    for(let i=0; i<diff; i++) {
      const newDate = new Date();
      newDate.setDate(startDate.getDate() + i);
      this.dates.push(newDate);
    }
  }

}
