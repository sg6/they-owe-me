import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../../../providers/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit{
  personForm: FormGroup;
  personId: number;

  constructor(private personService: PersonService,
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
    this.personService.getPerson(this.personId)
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
      this.personService.createPerson(person);
    } else {
      this.personService.editPerson(this.personId, person);
    }

    this.router.navigate([`/debt-management`]);
  }
}
