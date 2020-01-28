import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import procedures from '../../mock-data/procedures.mock';
import { Procedure } from 'src/app/models/procedure.model';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  constructor() { }

  public getAllProcedures(): Observable<Procedure[]> {
    return of(procedures).pipe(
      map(x => {
        const result = [];
        x.forEach(element => {
          result.push(new Procedure(element));
        });
        return result;
      })
    );
  }

}
