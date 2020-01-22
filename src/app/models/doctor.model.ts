import { Mocker } from './mocker';

export interface IDoctor {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  specialty: string;
}

export class Doctor {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public specialty: string;

  constructor(source: IDoctor) {
    Object.assign(this, source);
  }

  static mock(): Doctor {
    return new Doctor({
      firstName: Mocker.firstName(),
      lastName: Mocker.lastName(),
      phone: Mocker.phoneNo(),
      specialty: Mocker.specialty()
    });
  }
}
