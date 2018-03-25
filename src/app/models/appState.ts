import {Person} from './person';

export interface IAppState {
  persons: {
    persons: Person[];
  };
}
