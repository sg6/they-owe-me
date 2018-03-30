import {Person} from '../models/person';
import * as personActions from './../actions/person.action';
import {addNewArrayItemImmutable, createNewId, removeArrayItemImmutable, updateArrayItemImmutable} from '../helper/utilities';

export interface IState {
  persons: Person[];
}

const initialState: IState = {
  persons: []
};

export function personReducer(state = initialState, action: personActions.Actions): IState {
  switch (action.type) {
    case personActions.CREATE_PERSON: {
      return handleCreatePersonAction(state, <personActions.IPersonPayload>action.payload);
    }
    case personActions.EDIT_PERSON: {
      return handleEditPersonAction(state, <personActions.IPersonPayload>action.payload);
    }
    case personActions.DELETE_PERSON: {
      return handleDeletePersonAction(state, <personActions.IPersonPayload>action.payload);
    }
    case personActions.CREATE_DEBT: {
      return handleCreateDebtAction(state, <personActions.IDebtPayload>action.payload);
    }
    case personActions.EDIT_DEBT: {
      return handleEditDebtAction(state, <personActions.IDebtPayload>action.payload);
    }
    case personActions.DELETE_DEBT: {
      return handleDeleteDebtAction(state, <personActions.IDebtPayload>action.payload);
    }
    case personActions.PAY_DEBT: {
      return handlePayDebtAction(state, <personActions.IDebtPayload>action.payload);
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

function handleCreatePersonAction(state: IState, payload: personActions.IPersonPayload) {
  payload.person.id = createNewId(state.persons);
  return {
    persons: addNewArrayItemImmutable(state.persons, payload.person)
  };
}

function handleEditPersonAction(state: IState, payload: personActions.IPersonPayload) {
  return createNewStateWithUpdatedPerson(state.persons, payload.person);
}

function handleDeletePersonAction(state: IState, payload: personActions.IPersonPayload) {
  return {
    persons: removeArrayItemImmutable(state.persons, payload.person.getIndexFunc())
  };
}

function handleCreateDebtAction(state: IState, payload: personActions.IDebtPayload) {
  const person = payload.person.copyMe();

  person.debts = addNewArrayItemImmutable(person.debts, payload.debt);
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handleEditDebtAction(state: IState, payload: personActions.IDebtPayload) {
  const person = payload.person.copyMe();

  person.debts = updateArrayItemImmutable(person.debts, payload.debt, payload.debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handleDeleteDebtAction(state: IState, payload: personActions.IDebtPayload) {
  const person = payload.person.copyMe();

  person.debts = removeArrayItemImmutable(person.debts, payload.debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}

function handlePayDebtAction(state: IState, payload: personActions.IDebtPayload) {
  const person = payload.person.copyMe();
  const debt = payload.debt.copyMe();
  debt.isPaid = true;

  person.debts = updateArrayItemImmutable(person.debts, debt, debt.getIndexFunc());
  return createNewStateWithUpdatedPerson(state.persons, person);
}
