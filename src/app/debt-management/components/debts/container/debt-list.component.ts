import {Component, Input} from '@angular/core';
import {Debt} from '../../../models/debt';
import {DebtManagementService} from '../../../providers/debt-management.service';

@Component({
  selector: 'dm-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss']
})
export class DebtListComponent {
  @Input() personId: number;
  @Input() debts: Debt[];

  constructor(private debtManagementService: DebtManagementService) {

  }

  markDebtAsPaid(debt: Debt) {
    this.debtManagementService.markDebtAsPaid(this.personId, debt);
  }

  deleteDebt(debt: Debt) {
    this.debtManagementService.deleteDebt(this.personId, debt);
  }
}
