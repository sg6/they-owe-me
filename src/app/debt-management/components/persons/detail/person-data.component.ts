import {Component, Input} from '@angular/core';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-person-data',
  templateUrl: './person-data.component.html'
})
export class PersonDataComponent {
  @Input() person: Person;

  constructor() {

  }

}
