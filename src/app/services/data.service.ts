import { Injectable } from '@angular/core';
import { Procedure } from '../models/procedure.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewData = [
    {
      date: new Date("01/01/2020"),
      room: {
        number: 1,
        procedures: [
          Procedure.mock(),
          Procedure.mock(),
          Procedure.mock(),
        ]
      }
    }
  ];

  constructor() { }

  private _mockCalendarDayData(date: Date) {
    const result = {
      date: date,
      rooms: []
    };

    for (let i = 0; i < 3; i++) {
      result.rooms.push(this._mockRoomData(i));
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
