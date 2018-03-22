import {Action} from '@ngrx/store';
import {IPerson, Person} from '../models/person';
import {Debt, IDebt} from '../models/debt';

export const CREATE_PERSON = 'CREATE_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const CREATE_DEBT = 'CREATE_DEBT';
export const EDIT_DEBT = 'EDIT_DEBT';
export const DELETE_DEBT = 'DELETE_DEBT';
export const PAY_DEBT = 'PAY_DEBT';

export class CreatePersonAction implements Action {
  readonly type = CREATE_PERSON;

  constructor(public payload: Person) {

  }
}

export interface IEditPersonPayload {
  personIndex: number;
  person: IPerson;
}

export class EditPersonAction implements Action {
  readonly type = EDIT_PERSON;

  constructor(public payload: IEditPersonPayload) {

  }
}

export class DeletePersonAction implements Action {
  readonly type = DELETE_PERSON;

  constructor(public payload: number) {

  }
}

export class CreateDebtAction implements Action {
  readonly type = CREATE_DEBT;

  constructor(public payload: Debt) {

  }
}

export interface IEditDebtPayload {
  debtIndex: number;
  debt: IDebt;
}

export class EditDebtAction implements Action {
  readonly type = EDIT_DEBT;

  constructor(public payload: IEditDebtPayload) {

  }
}

export class DeleteDebtAction implements Action {
  readonly type = DELETE_DEBT;

  constructor(public payload: number) {

  }
}

export class PayDebtAction implements Action {
  readonly type = PAY_DEBT;

  constructor(public payload: number) {

  }
}

export type Actions
  = CreatePersonAction
  | EditPersonAction
  | DeletePersonAction
  | CreateDebtAction
  | EditDebtAction
  | DeleteDebtAction
  | PayDebtAction;
