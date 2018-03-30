import {Component, OnInit} from '@angular/core';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./persons.container.css']
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private debtManagementService: DebtManagementService) {

  }

  ngOnInit() {
    this.persons$ = this.debtManagementService.getPersons();
  }

  deletePerson(person: Person) {
    this.debtManagementService.deletePerson(person);
  }
}
