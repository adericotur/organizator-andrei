import { Mocker } from './mocker';

export interface IPacient {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export class Pacient {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public phone: string;

  constructor(source: IPacient) {
    Object.assign(this, source);
  }

  static mock() {
    return new Pacient({
      firstName: Mocker.firstName(),
      lastName: Mocker.lastName(),
      phone: Mocker.phoneNo()
    });
  }
}
