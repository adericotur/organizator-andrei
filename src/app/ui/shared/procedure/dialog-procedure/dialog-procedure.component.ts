import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorsService } from 'src/app/services/api/doctors.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Procedure } from 'src/app/models/procedure.model';

@Component({
  selector: 'app-dialog-procedure',
  templateUrl: './dialog-procedure.component.html',
  styleUrls: ['./dialog-procedure.component.sass']
})
export class DialogProcedureComponent implements OnInit {

  procedureForm: FormGroup;
  doctorCtrl: FormControl;

  availableDoctors: Doctor[];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<Doctor[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogProcedureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorsService: DoctorsService
    ) { }

    ngOnInit() {
      console.log(this.data);
      this._buildForm();
      this._getDoctors();

      this.filteredOptions = this.doctorCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }

    public onAddProcedure() {
      this.data.procedures.push(Procedure.mock());
      this.dialogRef.close();
    }

    public onClose() {
      this.dialogRef.close();
    }

    private _filter(value: string): Doctor[] {
      const filterValue = value.toLowerCase();
      return this.availableDoctors.filter(option => (option.firstName + option.lastName).toLowerCase().includes(filterValue));
    }

    private _getDoctors() {
      this.doctorsService.getAllDoctors().subscribe(
        (data: Doctor[]) =>{ this.availableDoctors = data;}
      );
    }

    private _buildForm() {
      this.doctorCtrl = new FormControl();
      this.procedureForm = new FormGroup({
        doctorCtrl: this.doctorCtrl
      });
    }

}
