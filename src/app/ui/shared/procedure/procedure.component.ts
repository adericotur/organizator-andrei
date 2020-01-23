import { Component, OnInit, Input } from '@angular/core';
import { Doctor, IDoctor } from 'src/app/models/doctor.model';
import { Pacient, IPacient } from 'src/app/models/pacient.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.sass']
})
export class ProcedureComponent implements OnInit {

  @Input() order: number;
  @Input() data: {doctor: Doctor, pacient: Pacient}

  constructor() { }

  ngOnInit() {
  }

}
