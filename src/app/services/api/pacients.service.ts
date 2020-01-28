import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import pacients from '../../mock-data/pacients.mock';
import { Pacient } from 'src/app/models/pacient.model';

@Injectable({
  providedIn: 'root'
})
export class PacientsService {

  constructor() { }

  public getAllPacients(): Observable<Pacient[]> {
    return of(pacients).pipe(
      map(x => {
        const result = [];
        x.forEach(element => {
          result.push(new Pacient(element));
        });
        return result;
      })
      // reduce((acc, current) => acc.push(new Pacient(current)), [])
    );
  }

  public addPacient(Pacient: Pacient) {

  }
}
