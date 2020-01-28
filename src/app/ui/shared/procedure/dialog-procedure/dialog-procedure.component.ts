import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/api/doctors.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Procedure } from 'src/app/models/procedure.model';
import { Pacient } from 'src/app/models/pacient.model';
import { ProceduresService } from 'src/app/services/api/procedures.service';
import { PacientsService } from 'src/app/services/api/pacients.service';
import { id_ID } from 'ng-zorro-antd';

@Component({
  selector: 'app-dialog-procedure',
  templateUrl: './dialog-procedure.component.html',
  styleUrls: ['./dialog-procedure.component.sass']
})
export class DialogProcedureComponent implements OnInit {

  procedureForm: FormGroup;
  doctorCtrl: FormControl;
  procedureCtrl: FormControl;
  pacientCtrl: FormControl;

  availableDoctors: Doctor[];
  availableProcedures: Procedure[];
  availablePacients: Pacient[];

  filteredDoctors$: Observable<Doctor[]>;
  filteredProcedures$: Observable<Procedure[]>;
  filteredPacients$: Observable<Pacient[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogProcedureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorsService: DoctorsService,
    private proceduresService: ProceduresService,
    private pacientsService: PacientsService
    ) { }

    ngOnInit() {
      this._buildForm();
      this._getDoctors();
      this._getPacients();
      this._getProcedures();

      this._getFilteredValuesObservables();
    }

    public onAddProcedure() {
      if (this.procedureForm.valid) {
        this.data.procedures.push({
          doctor: this.doctorCtrl.value,
          pacient: this.pacientCtrl.value,
          procedure: this.procedureCtrl.value,
        });
      }
      this.dialogRef.close();
    }

    public onClose() {
      this.dialogRef.close();
    }

    public displayPersonFn(person?: Doctor|Pacient): string | undefined {
      return person ? `${person.lastName} ${person.firstName}` : undefined;
    }

    public displayProcedureFn(procedure?: Procedure): string | undefined {
      return procedure ? procedure.name : undefined;
    }

    private _getFilteredValuesObservables() {
      this.filteredDoctors$ = this.doctorCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterDoctor(value))
      );
      this.filteredPacients$ = this.pacientCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterPacient(value))
      );
      this.filteredProcedures$ = this.procedureCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterProcedure(value))
      );
    }

    private _filterDoctor(value: string|Doctor): Doctor[] {
      if (typeof value === 'string') {
        const filterValue = value.toLowerCase();
        return this.availableDoctors.filter(option => (option.firstName + option.lastName).toLowerCase().includes(filterValue));
      }
    }

    private _filterPacient(value: string|Pacient): Pacient[] {
      if (typeof value === 'string') {
        const filterValue = value.toLowerCase();
        return this.availablePacients.filter(option => (option.firstName + option.lastName).toLowerCase().includes(filterValue));
      }
    }

    private _filterProcedure(value: string|Procedure): Procedure[] {
      if (typeof value === 'string') {
        const filterValue = value.toLowerCase();
        return this.availableProcedures.filter(option => option.name.toLowerCase().includes(filterValue));
      }
    }

    private _getDoctors() {
      this.doctorsService.getAllDoctors().subscribe(
        (data: Doctor[]) => this.availableDoctors = data
      );
    }
    private _getPacients() {
      this.pacientsService.getAllPacients().subscribe(
        (data: Pacient[]) => this.availablePacients = data
      );
    }
    private _getProcedures() {
      this.proceduresService.getAllProcedures().subscribe(
        (data: Procedure[]) => this.availableProcedures = data
      );
    }

    private _buildForm() {
      this.doctorCtrl = new FormControl(null, [Validators.required]);
      this.procedureCtrl = new FormControl(null, [Validators.required]);
      this.pacientCtrl = new FormControl(null, [Validators.required]);

      this.procedureForm = new FormGroup({
        doctorCtrl: this.doctorCtrl,
        procedureCtrl: this.procedureCtrl,
        pacientCtrl: this.pacientCtrl,
      });
    }

}
