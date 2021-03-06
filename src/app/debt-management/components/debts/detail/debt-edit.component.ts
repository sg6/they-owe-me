import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {Debt} from '../../../models/debt';
import {SnackbarService} from '../../../providers/snackbar.service';

@Component({
  selector: 'app-debt-edit',
  templateUrl: './debt-edit.component.html'
})
export class DebtEditComponent {
  personId: number;
  debtId: number;
  debt: Debt;

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);

  constructor(private debtManagementService: DebtManagementService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackbarService: SnackbarService) {

  }

  get isNewDebt(): boolean {
    return this.debtId === -1;
  }

  ngOnInit() {
    this.personId = parseInt(this.activatedRoute.snapshot.params['personId']);

    const paramDebtId = this.activatedRoute.snapshot.params['debtId'];
    this.debtId = paramDebtId === 'new' ? -1 : parseInt(paramDebtId);
    this.debt = new Debt(null);

    if (!this.isNewDebt) {
      this.getDebt();
    }
  }

  getDebt() {
    this.debtManagementService.getDebt(this.personId, this.debtId)
      .subscribe(debt => this.debt = debt);
  }

  saveDebt() {
    if (this.isNewDebt) {
      this.debtManagementService.createDebt(this.personId, this.debt);
      this.snackbarService.open('Debt ' + this.debt.title + ' created');
    } else {
      this.debtManagementService.editDebt(this.personId, this.debt);
      this.snackbarService.open('Debt ' + this.debt.title + ' edited');
    }

    this.navigateBackToPerson();
  }

  cancel() {
    this.navigateBackToPerson();
  }

  private navigateBackToPerson() {
    this.router.navigate(['/debt-management/person/detail', this.personId]);
  }
}
