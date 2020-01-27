import { Mocker } from './mocker';
import { Doctor } from './doctor.model';
import { Pacient } from './pacient.model';

export interface IProcedure {
  id?: number;
  doctor: Doctor;
  pacient: Pacient;
  procedure: string;
}

export class Procedure {
  public id?: number;
  public doctor: Doctor;
  public pacient: Pacient;
  public procedure: string;

  constructor(source: IProcedure) {
    Object.assign(this, source);
  }

  static mock(): Procedure {
    return new Procedure({
      doctor: Doctor.mock(),
      pacient: Pacient.mock(),
      procedure: Mocker.specialty()
    });
  }
}
