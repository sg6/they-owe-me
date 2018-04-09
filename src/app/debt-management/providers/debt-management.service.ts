import {Injectable} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../models/person';
import {Debt} from '../models/debt';
import * as debtManagementActions from '../store/actions/debtManagement.action';
import {IDebtManagementState} from '../models/appState';
import {getArrayItem} from '../../helper/utilities';

@Injectable()
export class DebtManagementService {
  constructor(private store: Store<IDebtManagementState>) {

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
    this.store.dispatch(new debtManagementActions.CreatePersonAction({person: person}));
  }

  editPerson(person: Person) {
    this.store.dispatch(new debtManagementActions.EditPersonAction({person: person}));
  }

  deletePerson(person: Person) {
    this.store.dispatch(new debtManagementActions.DeletePersonAction({person: person}));
  }

  createDebt(personId: number, debt: Debt) {
    this.store.dispatch(new debtManagementActions.CreateDebtAction({personId: personId, debt: debt}));
  }

  editDebt(personId: number, debt: Debt) {
    this.store.dispatch(new debtManagementActions.EditDebtAction({personId: personId, debt: debt}));
  }

  deleteDebt(personId: number, debt: Debt) {
    this.store.dispatch(new debtManagementActions.DeleteDebtAction({personId: personId, debt: debt}));
  }

  markDebtAsPaid(personId: number, debt: Debt) {
    this.store.dispatch(new debtManagementActions.MarkDebtAsPaidAction({personId: personId, debt: debt}));
  }

  private selectFeature = (state: IDebtManagementState) => state.debtManagement.persons;

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
