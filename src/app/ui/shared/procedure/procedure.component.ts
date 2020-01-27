import { Component, OnInit, Input } from '@angular/core';
import { Doctor, IDoctor } from 'src/app/models/doctor.model';
import { Pacient, IPacient } from 'src/app/models/pacient.model';
import { MatDialog } from '@angular/material';
import { DialogProcedureComponent } from './dialog-procedure/dialog-procedure.component';
import { Procedure } from 'src/app/models/procedure.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.sass']
})
export class ProcedureComponent implements OnInit {

  @Input() order: number;
  @Input() data: Procedure;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogProcedureComponent, {
      data: this.data
    });
  }

}
