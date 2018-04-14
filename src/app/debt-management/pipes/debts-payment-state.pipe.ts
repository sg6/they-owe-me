import {Pipe, PipeTransform} from '@angular/core';
import {Debt} from '../models/debt';

@Pipe({
  name: 'debtsPaymentState'
})
export class DebtsPaymentStatePipe implements PipeTransform {

  transform(debts: Debt[], state?: string): Debt[] {
    if (state === 'unpaid') {
      return debts.filter(debt => !debt.isPaid);
    }

    if (state === 'paid') {
      return debts.filter(debt => debt.isPaid);
    }

    return debts;
  }

}
