import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import doctors from '../../mock-data/doctors.mock';
import { Doctor } from 'src/app/models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor() { }

  public getAllDoctors(): Observable<Doctor[]> {
    return of(doctors);
  }

  public addDoctor(doctor: Doctor) {

  }
}
