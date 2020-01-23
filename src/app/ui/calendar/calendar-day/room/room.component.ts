import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { Pacient } from 'src/app/models/pacient.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  public procedures = [
    {doctor: Doctor.mock(), pacient: Pacient.mock()},
    {doctor: Doctor.mock(), pacient: Pacient.mock()},
    {doctor: Doctor.mock(), pacient: Pacient.mock()},
  ];
  @Input() roomNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
