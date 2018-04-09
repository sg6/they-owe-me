import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {Debt} from '../../../models/debt';

@Component({
  selector: 'app-debt-edit',
  templateUrl: './debt-edit.component.html'
})
export class DebtEditComponent {
  debtForm: FormGroup;
  personId: number;
  debtId: number;

  constructor(private debtManagementService: DebtManagementService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {

  }

  get isNewDebt(): boolean {
    return this.debtId === -1;
  }

  ngOnInit() {
    this.personId = parseInt(this.activatedRoute.snapshot.params['personId']);

    const paramDebtId = this.activatedRoute.snapshot.params['debtId'];
    this.debtId = paramDebtId === 'new' ? -1 : parseInt(paramDebtId);
    this.buildForm();

    if (!this.isNewDebt) {
      this.getDebt();
    }
  }

  getDebt() {
    this.debtManagementService.getDebt(this.personId, this.debtId)
      .subscribe(debt => this.debtForm.patchValue(debt));
  }

  buildForm() {
    this.debtForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  saveDebt() {
    const debt = new Debt(this.debtForm.value);

    if (this.isNewDebt) {
      this.debtManagementService.createDebt(this.personId, debt);
    } else {
      debt.id = this.debtId;
      this.debtManagementService.editDebt(this.personId, debt);
    }

    this.router.navigate(['/debt-management/person/detail/' + this.personId]);
  }
}
