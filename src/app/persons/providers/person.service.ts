import {Injectable} from '@angular/core';
import {IState} from '../../reducers/person.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../models/person';
import {Debt} from '../../models/debt';
import * as personAction from './../../actions/person.action';

@Injectable()
export class PersonService {
  constructor(private store: Store<IState>) {

  }

  getPersons(): Observable<Person[]> {
    return this.store.select(state => state.persons);
  }

  getDebts(personId: number): Observable<Debt[]> {
    return this.store.select(state => state.persons[personId].debts);
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
