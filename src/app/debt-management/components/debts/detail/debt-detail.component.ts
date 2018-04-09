import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {Debt} from '../../../models/debt';

@Component({
  selector: 'app-deb-detail',
  templateUrl: './debt-detail.component.html'
})
export class DebtDetailComponent {
  personId: number;
  debtId: number;
  debt$: Observable<Debt>;

  constructor(private activatedRoute: ActivatedRoute, private debtManagementService: DebtManagementService) {

  }

  ngOnInit() {
    this.personId = parseInt(this.activatedRoute.snapshot.params['personId']);
    this.debtId = parseInt(this.activatedRoute.snapshot.params['debtId']);
    this.debt$ = this.debtManagementService.getDebt(this.personId, this.debtId);
  }
}
