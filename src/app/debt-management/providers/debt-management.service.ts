import {Injectable} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../models/person';
import {Debt} from '../../models/debt';
import * as personAction from './../../actions/person.action';
import {IAppState} from '../../models/appState';
import {getArrayItem} from '../../helper/utilities';

@Injectable()
export class DebtManagementService {
  constructor(private store: Store<IAppState>) {

  }

  getPersons(): Observable<Person[]> {
    return this.store.select(this.selectFeature);
  }

  getPerson(personId: number): Observable<Person> {
    return this.store.select(this.selectPerson(personId));
  }

  getDebts(personId: number): Observable<Debt[]> {
    return this.store.select(this.selectDebts(personId));
  }

  getDebt(personId: number, debtId: number): Observable<Debt> {
    return this.store.select(this.selectDebt(personId, debtId));
  }

  createPerson(person: Person) {
    this.store.dispatch(new personAction.CreatePersonAction({person: person}));
  }

  editPerson(person: Person) {
    this.store.dispatch(new personAction.EditPersonAction({person: person}));
  }

  deletePerson(person: Person) {
    this.store.dispatch(new personAction.DeletePersonAction({person: person}));
  }

  createDebt(person: Person, debt: Debt) {
    this.store.dispatch(new personAction.CreateDebtAction({person: person, debt: debt}));
  }

  editDebt(person: Person, debt: Debt) {
    this.store.dispatch(new personAction.EditDebtAction({person: person, debt: debt}));
  }

  deleteDebt(person: Person, debt: Debt) {
    this.store.dispatch(new personAction.DeleteDebtAction({person: person, debt: debt}));
  }

  payDebt(person: Person, debt: Debt) {
    this.store.dispatch(new personAction.PayDebtAction({person: person, debt: debt}));
  }

  private selectFeature = (state: IAppState) => state.persons.persons;

  private selectPerson(personId: number) {
    return createSelector(this.selectFeature, (persons: Person[]) => getArrayItem(persons, Person.createIndexFunc(personId)));
  }

  private selectDebts(personId: number) {
    return createSelector(this.selectPerson(personId), (person: Person) => person.debts);
  }

  private selectDebt(personId: number, debtId: number) {
    return createSelector(this.selectDebts(personId), (debts: Debt[]) => getArrayItem(debts, Debt.createIndexFunc(debtId)));
  }
}
