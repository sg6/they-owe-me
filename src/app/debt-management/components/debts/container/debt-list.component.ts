import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Debt} from '../../../models/debt';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.css']
})
export class DebtListComponent implements OnInit {
  personId: number;
  debts$: Observable<Debt[]>;

  constructor(private debtManagementService: DebtManagementService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.personId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.debts$ = this.debtManagementService.getDebts(this.personId);
  }

  markDebtAsPaid(debt: Debt) {
    this.debtManagementService.markDebtAsPaid(this.personId, debt);
  }

  deleteDebt(debt: Debt) {
    this.debtManagementService.deleteDebt(this.personId, debt);
  }
}
