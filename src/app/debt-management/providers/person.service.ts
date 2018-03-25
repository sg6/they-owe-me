import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../models/person';
import {Debt} from '../../models/debt';
import * as personAction from './../../actions/person.action';
import {IAppState} from '../../models/appState';

@Injectable()
export class PersonService {
  constructor(private store: Store<IAppState>) {

  }

  getPersons(): Observable<Person[]> {
    return this.store.select(state => state.persons.persons);
  }

  getPerson(personId: number): Observable<Person> {
    return this.store.select(state => state.persons.persons[personId]);
  }

  getDebts(personId: number): Observable<Debt[]> {
    return this.store.select(state => state.persons.persons[personId].debts);
  }

  createPerson(person: Person) {
    this.store.dispatch(new personAction.CreatePersonAction(person));
  }

  editPerson(personId: number, person: Person) {
    this.store.dispatch(new personAction.EditPersonAction({personId: personId, person: person}));
  }

  deletePerson(personId: number) {
    this.store.dispatch(new personAction.DeletePersonAction(personId));
  }

  createDebt(personId: number, debt: Debt) {
    this.store.dispatch(new personAction.CreateDebtAction({personId: personId, debt: debt}));
  }

  editDebt(personId: number, debtId: number, debt: Debt) {
    this.store.dispatch(new personAction.EditDebtAction({personId: personId, debtId: debtId, debt: debt}));
  }

  deleteDebt(personId: number, debtId: number) {
    this.store.dispatch(new personAction.DeleteDebtAction({personId: personId, debtId: debtId}));
  }

  payDebt(personId: number, debtId: number) {
    this.store.dispatch(new personAction.PayDebtAction({personId: personId, debtId: debtId}));
  }
}
