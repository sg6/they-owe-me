import {Component, Input} from '@angular/core';
import {Person} from '../../../models/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html'
})
export class PersonItemComponent {
  @Input() person: Person;

  constructor() {

  }
}
