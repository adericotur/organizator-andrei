import { Injectable } from '@angular/core';
import { Procedure } from '../models/procedure.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewData = [];

  constructor() {;
  }

  public generateData() {
    this.viewData.push(this._mockCalendarDayData(new Date("01/01/2020")));
    this.viewData.push(this._mockCalendarDayData(new Date("01/02/2020")));
    this.viewData.push(this._mockCalendarDayData(new Date("01/03/2020")));
    this.viewData.push(this._mockCalendarDayData(new Date("01/04/2020")));
    this.viewData.push(this._mockCalendarDayData(new Date("01/05/2020")));
  }

  public getRoomListProcedures(date: Date, roomIndex: number) {
    const day = this.viewData.filter(data => data.date.getTime() === date.getTime());
    if (day.length) {
      return day[0][roomIndex];
    }
  }

  private _mockCalendarDayData(date: Date) {
    const result = {
      date: date,
      rooms: []
    };

    for (let i = 0; i < 3; i++) {
      result.rooms.push(this._mockRoomData(i+1));
    }

    return result;
  }

  private _mockRoomData(roomNo: number) {
    return {
      number: roomNo,
      procedures: [
        Procedure.mock(),
        Procedure.mock(),
        Procedure.mock(),
      ]
    };
  }
}
