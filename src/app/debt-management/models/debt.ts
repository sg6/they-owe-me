export interface IDebt {
  id: number;
  title: string;
  amount: number;
  description: string;
  isPaid: boolean;
}

export class Debt implements IDebt {
  id: number;
  title: string;
  amount: number;
  description: string;
  isPaid: boolean;

  constructor(json: IDebt) {
    this.isPaid = false;

    this.fromJson(json);
  }

  static createIndexFunc(debtId: Number) {
    return (debt: Debt) => {
      return debt.id === debtId;
    };
  }

  fromJson(json: IDebt) {
    if (!json) {
      return;
    }

    this.id = json.id;
    this.title = json.title;
    this.amount = json.amount;
    this.description = json.description;
    this.isPaid = json.isPaid;
  }

  toJson(): IDebt {
    return {
      id: this.id,
      title: this.title,
      amount: this.amount,
      description: this.description,
      isPaid: this.isPaid
    };
  }

  copyMe(): Debt {
    return new Debt(this.toJson());
  }

  getIndexFunc() {
    return Debt.createIndexFunc(this.id);
  }
}
