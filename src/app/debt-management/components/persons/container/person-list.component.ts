import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../providers/person.service';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./persons.container.css']
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) {

  }

  ngOnInit() {
    this.persons$ = this.personService.getPersons();
  }

  deletePerson(personId: number) {
    this.personService.deletePerson(personId);
  }
}
