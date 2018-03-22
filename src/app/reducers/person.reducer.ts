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
      return {
        persons: updateArrayItemImmutable(state.persons, payload.personIndex, payload.person)
      };
    }
    case personActions.DELETE_PERSON: {
      return {
        persons: removeArrayItemImmutable(state.persons, action.payload)
      };
    }
  }
}

