import { Mocker } from './mocker';

export interface IProcedure {
  id?: number;
  name: string;
}

export class Procedure {
  public id?: number;
  public name: string;

  constructor(source: IProcedure) {
    Object.assign(this, source);
  }

  static mock(): Procedure {
    return new Procedure({
      name: Mocker.specialty()
    });
  }
}
