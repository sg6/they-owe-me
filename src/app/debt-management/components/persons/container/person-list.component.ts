import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../providers/person.service';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) {

  }

  ngOnInit() {
    this.persons$ = this.personService.getPersons();
  }
}
