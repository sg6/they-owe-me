import {Person} from './person';

export interface IDebtManagementState {
  debtManagement: {
    persons: Person[];
  };
}
