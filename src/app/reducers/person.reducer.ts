import {Person} from '../models/person';
import * as personActions from './../actions/person.action';
import {addNewArrayItemImmutable, removeArrayItemImmutable, updateArrayItemImmutable} from '../helper/utilities';

export interface IState {
  persons: Person[];
}

const initialState: IState = {
  persons: []
};

export function personReducer(state = initialState, action: personActions.Actions): IState {
  switch (action.type) {
    case personActions.CREATE_PERSON: {
      return {
        persons: addNewArrayItemImmutable(state.persons, action.payload)
      };
    }
    case personActions.EDIT_PERSON: {
      const payload = <personActions.IEditPersonPayload>action.payload;
      return createNewStateWithUpdatedPerson(state.persons, payload.personIndex, payload.person);
    }
    case personActions.DELETE_PERSON: {
      return {
        persons: removeArrayItemImmutable(state.persons, action.payload)
      };
    }
    case personActions.CREATE_DEBT: {
      const payload = <personActions.ICreateDebtPayload>action.payload;
      const person = state.persons[payload.personIndex].copyMe();

      person.debts = addNewArrayItemImmutable(person.debts, payload.debt);
      return createNewStateWithUpdatedPerson(state.persons, payload.personIndex, person);
    }
    case personActions.EDIT_DEBT: {
      const payload = <personActions.IEditDebtPayload>action.payload;
      const person = state.persons[payload.personIndex].copyMe();

      person.debts = updateArrayItemImmutable(person.debts, payload.debtIndex, payload.debt);
      return createNewStateWithUpdatedPerson(state.persons, payload.personIndex, person);
    }
    case personActions.DELETE_DEBT: {
      const payload = <personActions.IDeleteDebtPayload>action.payload;
      const person = state.persons[payload.personIndex].copyMe();

      person.debts = removeArrayItemImmutable(person.debts, payload.debtIndex);
      return createNewStateWithUpdatedPerson(state.persons, payload.personIndex, person);
    }
    case personActions.PAY_DEBT: {
      const payload = <personActions.IPayDebtPayload>action.payload;
      const person = state.persons[payload.personIndex].copyMe();
      const debt = person.debts[payload.debtIndex].copyMe();
      debt.isPaid = true;

      person.debts = updateArrayItemImmutable(person.debts, payload.debtIndex, debt);
      return createNewStateWithUpdatedPerson(state.persons, payload.personIndex, person);
    }
    default: {
      return initialState;
    }
  }
}

function createNewStateWithUpdatedPerson(persons: Person[], updateIndex: number, updatedPerson: Person): IState {
  return {
    persons: updateArrayItemImmutable(persons, updateIndex, updatedPerson)
  };
}

