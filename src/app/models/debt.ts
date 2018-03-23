export interface IDebt {
  amount: number;
  description: string;
  isPaid: boolean;
}

export class Debt implements IDebt {
  amount: number;
  description: string;
  isPaid: boolean;

  constructor(json: IDebt) {
    this.isPaid = false;

    this.fromJson(json);
  }

  fromJson(json: IDebt) {
    if (!json) {
      return;
    }

    this.amount = json.amount;
    this.description = json.description;
    this.isPaid = json.isPaid;
  }

  toJson(): IDebt {
    return {
      amount: this.amount,
      description: this.description,
      isPaid: this.isPaid
    };
  }

  copyMe(): Debt {
    return new Debt(this.toJson());
  }
}
