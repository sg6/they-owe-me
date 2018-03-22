import {Debt, IDebt} from './debt';

export interface IPerson {
  name: string;
  description: string;
  debts: IDebt[];
}

export class Person implements IPerson {
  name: string;
  description: string;
  debts: Debt[];

  constructor(json: IPerson) {
    this.fromJson(json);
  }

  fromJson(json: IPerson) {
    if (!json) {
      return;
    }

    this.name = json.name;
    this.description = json.description;
    this.debts = [];

    if (json.debts) {
      json.debts.forEach((debt: IDebt) => {
        this.debts.push(new Debt(debt));
      });
    }
  }
}
