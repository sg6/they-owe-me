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

  toJson(): IPerson {
    const json: IPerson = {
      name: this.name,
      description: this.description,
      debts: undefined
    };

    if (this.debts) {
      json.debts = [];

      this.debts.forEach((debt: Debt) => {
        json.debts.push(debt.toJson());
      });
    }

    return json;
  }

  copyMe(): Person {
    return new Person(this.toJson());
  }
}
