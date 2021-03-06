import {Action} from '@ngrx/store';
import {Person} from '../../models/person';
import {Debt} from '../../models/debt';

export const CREATE_PERSON = 'CREATE_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const CREATE_DEBT = 'CREATE_DEBT';
export const EDIT_DEBT = 'EDIT_DEBT';
export const DELETE_DEBT = 'DELETE_DEBT';
export const MARK_DEBT_AS_PAID = 'MARK_DEBT_AS_PAID';

export interface IPersonPayload {
  person: Person;
}

export class CreatePersonAction implements Action {
  readonly type = CREATE_PERSON;

  constructor(public payload: IPersonPayload) {

  }
}

export class EditPersonAction implements Action {
  readonly type = EDIT_PERSON;

  constructor(public payload: IPersonPayload) {

  }
}

export class DeletePersonAction implements Action {
  readonly type = DELETE_PERSON;

  constructor(public payload: IPersonPayload) {

  }
}


export interface IDebtPayload {
  personId: number;
  debt: Debt;
}

export class CreateDebtAction implements Action {
  readonly type = CREATE_DEBT;

  constructor(public payload: IDebtPayload) {

  }
}

export class EditDebtAction implements Action {
  readonly type = EDIT_DEBT;

  constructor(public payload: IDebtPayload) {

  }
}

export class DeleteDebtAction implements Action {
  readonly type = DELETE_DEBT;

  constructor(public payload: IDebtPayload) {

  }
}

export class MarkDebtAsPaidAction implements Action {
  readonly type = MARK_DEBT_AS_PAID;

  constructor(public payload: IDebtPayload) {

  }
}

export type Actions
  = CreatePersonAction
  | EditPersonAction
  | DeletePersonAction
  | CreateDebtAction
  | EditDebtAction
  | DeleteDebtAction
  | MarkDebtAsPaidAction;
