import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../../../models/person';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../../../providers/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  personId: number;
  person$: Observable<Person>;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService) {

  }

  ngOnInit() {
    this.personId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.person$ = this.personService.getPerson(this.personId);
  }
}
