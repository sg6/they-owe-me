import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DebtManagementService} from '../../../providers/debt-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit{
  personForm: FormGroup;
  personId: number;

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
    this.buildForm();

    if (!this.isNewPerson) {
      this.getPerson();
    }

  }

  getPerson() {
    this.debtManagementService.getPerson(this.personId)
      .subscribe(person => this.personForm.patchValue(person));
  }

  buildForm() {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  savePerson() {
    const person = new Person(this.personForm.value);

    if (this.isNewPerson) {
      this.debtManagementService.createPerson(person);
    } else {
      person.id = this.personId;
      this.debtManagementService.editPerson(person);
    }

    this.router.navigate([`/debt-management`]);
  }
}
