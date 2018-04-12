import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../../models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  personId: number;
  person: Person;

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  constructor(private debtManagementService: DebtManagementService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {

  }

  get isNewPerson(): boolean {
    return this.personId === -1;
  }

  ngOnInit() {
    const paramId = this.activatedRoute.snapshot.params['id'];
    this.personId = paramId === 'new' ? -1 : parseInt(paramId);
    this.person = new Person(null);

    if (!this.isNewPerson) {
      this.getPerson();
    }
  }

  getPerson() {
    this.debtManagementService.getPerson(this.personId)
      .subscribe(person => this.person = person.copyMe());
  }

  savePerson() {
    if (this.isNewPerson) {
      this.debtManagementService.createPerson(this.person);
    } else {
      this.debtManagementService.editPerson(this.person);
    }

    this.navigateHome();
  }

  cancel() {
    this.navigateHome();
  }

  private navigateHome() {
    this.router.navigate([`/debt-management`]);
  }
}
