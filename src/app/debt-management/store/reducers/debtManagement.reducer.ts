import {Person} from '../../models/person';
import * as debtManagementActions from '../actions/debtManagement.action';
import {
  addNewArrayItemImmutable, createNewId, getArrayItem, removeArrayItemImmutable,
  updateArrayItemImmutable
} from '../../../helper/utilities';
import {getTestState} from '../../testData/state';

export interface IState {
  persons: Person[];
}

// temporaly using data from unit-tests as initialState
const initialState = getTestState();

export function debtManagementReducer(state = initialState, action: debtManagementActions.Actions): IState {
  switch (action.type) {
    case debtManagementActions.CREATE_PERSON: {
      return handleCreatePersonAction(state, <debtManagementActions.IPersonPayload>action.payload);
    }
    case debtManagementActions.EDIT_PERSON: {
      return handleEditPersonAction(state, <debtManagementActions.IPersonPayload>action.payload);
    }
    case debtManagementActions.DELETE_PERSON: {
      return handleDeletePersonAction(state, <debtManagementActions.IPersonPayload>action.payload);
    }
    case debtManagementActions.CREATE_DEBT: {
      return handleCreateDebtAction(state, <debtManagementActions.IDebtPayload>action.payload);
    }
    case debtManagementActions.EDIT_DEBT: {
      return handleEditDebtAction(state, <debtManagementActions.IDebtPayload>action.payload);
    }
    case debtManagementActions.DELETE_DEBT: {
      return handleDeleteDebtAction(state, <debtManagementActions.IDebtPayload>action.payload);
    }
    case debtManagementActions.PAY_DEBT: {
      return handlePayDebtAction(state, <debtManagementActions.IDebtPayload>action.payload);
    }
    default: {
      return initialState;
    }
  }
}

function createNewStateWithUpdatedPerson(persons: Person[], updatedPerson: Person): IState {
  return {
    persons: updateArrayItemImmutable(persons, updatedPerson, updatedPerson.getIndexFunc())
  };
}

function handleCreatePersonAction(state: IState, payload: debtManagementActions.IPersonPayload) {
  payload.person.id = createNewId(state.persons);
  return {
    persons: addNewArrayItemImmutable(state.persons, payload.person)
  };
}

function handleEditPersonAction(state: IState, payload: debtManagementActions.IPersonPayload) {
  return createNewStateWithUpdatedPerson(state.persons, payload.person);
}

function handleDeletePersonAction(state: IState, payload: debtManagementActions.IPersonPayload) {
  return {
    persons: removeArrayItemImmutable(state.persons, payload.person.getIndexFunc())
  };
}

function handleCreateDebtAction(state: IState, payload: debtManagementActions.IDebtPayload) {
  const person = getPersonCopy(state, payload.personId);
  payload.debt.id = createNewId(person.debts);

  person.debts = addNewArrayItemImmutable(person.debts, payload.debt);
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handleEditDebtAction(state: IState, payload: debtManagementActions.IDebtPayload) {
  const person = getPersonCopy(state, payload.personId);

  person.debts = updateArrayItemImmutable(person.debts, payload.debt, payload.debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handleDeleteDebtAction(state: IState, payload: debtManagementActions.IDebtPayload) {
  const person = getPersonCopy(state, payload.personId);

  person.debts = removeArrayItemImmutable(person.debts, payload.debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handlePayDebtAction(state: IState, payload: debtManagementActions.IDebtPayload) {
  const person = getPersonCopy(state, payload.personId);
  const debt = payload.debt.copyMe();
  debt.isPaid = true;

  person.debts = updateArrayItemImmutable(person.debts, debt, debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function getPersonCopy(state, personId): Person {
  const person = getArrayItem(state.persons, Person.createIndexFunc(personId));
  return person.copyMe();
}
