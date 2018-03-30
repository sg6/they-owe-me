import {Debt, IDebt} from './debt';

export interface IPerson {
  id: number;
  name: string;
  description: string;
  debts: IDebt[];
}

export class Person implements IPerson {
  id: number;
  name: string;
  description: string;
  debts: Debt[];

  constructor(json: IPerson) {
    this.fromJson(json);
  }

  static createIndexFunc(personId: Number) {
    return (person: Person) => {
      return person.id === personId;
    };
  }

  fromJson(json: IPerson) {
    if (!json) {
      return;
    }

    this.id = json.id;
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
      id: this.id,
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

  openDebtsSum(): number {
    return this.debts.reduce((openDebtsSum: number, debt: Debt) => {
      if (debt.isPaid) {
        return openDebtsSum;
      }

      return debt.amount + openDebtsSum;
    }, 0);
  }

  getIndexFunc() {
    return Person.createIndexFunc(this.id);
  }
}


