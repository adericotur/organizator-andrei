import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.sass']
})
export class CalendarDayComponent implements OnInit {

  @Input() date: Date;
  public dateFormat = 'dd.MM.yyyy';
  public rooms = [1, 2, 3];

  constructor() { }
  ngOnInit() {
  }

}
