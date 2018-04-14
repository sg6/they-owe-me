import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../models/person';
import {ActivatedRoute} from '@angular/router';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {Debt} from '../../../models/debt';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  personId: number;
  person$: Observable<Person>;
  debts$: Observable<Debt[]>;

  constructor(private route: ActivatedRoute, private debtManagementService: DebtManagementService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personId = parseInt(params['id']);

      if (this.personId !== undefined) {
        this.person$ = this.debtManagementService.getPerson(this.personId);
      }

      this.debts$ = this.debtManagementService.getDebts(this.personId);
    });
  }
}
