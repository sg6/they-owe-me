import {IState, debtManagementReducer} from './debtManagement.reducer';
import {Person} from '../../models/person';
import {Debt} from '../../models/debt';
import * as debtManagementActions from '../actions/debtManagement.action';

describe('debtManagementReducer', () => {
  let oldState: IState;
  let newPerson: Person;
  let newDebt: Debt;
  beforeEach(() => {
    oldState = {
      persons: [
        new Person({
          id: 0,
          name: 'Nepomuk',
          description: 'some ugly guy',
          debts: [
            new Debt({id: 0, amount: 100, description: 'beer', isPaid: false}),
            new Debt({
              id: 1,
              amount: 10,
              description: 'lost a bet, he thought i was not brave enough to shit in the girls-shower',
              isPaid: true
            })
          ]
        }),
        new Person({
          id: 1,
          name: 'Sepp',
          description: 'this idiot is so broke, why did i lend him some money?!?!?!?',
          debts: [
            new Debt({id: 0, amount: 30000, description: 'this idiot bought bitcoins in 2017Q4...', isPaid: false}),
            new Debt({id: 1, amount: 100, description: 'pizza', isPaid: false})
          ]
        })
      ]
    };

    newPerson = new Person({
      id: 2,
      name: 'Franz',
      description: 'smells skunkish',
      debts: []
    });

    newDebt = new Debt({
      id: 2,
      amount: 33, description: 'entrance fee for kreisky-concert @ wuk/vienna', isPaid: false
    });
  });

  describe('CreatePersonAction', () => {
    it('should add new person', () => {
      const action = new debtManagementActions.CreatePersonAction({person: newPerson});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[2]).toBe(newPerson);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.CreatePersonAction({person: newPerson});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('EditPersonAction', () => {
    beforeEach(() => {
      newPerson.id = 1;
    });

    it('should update person', () => {
      const action = new debtManagementActions.EditPersonAction({person: newPerson});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[1]).toBe(newPerson);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.EditPersonAction({person: newPerson});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons[1]).not.toBe(newPerson);
    });
  });

  describe('DeletePersonAction', () => {
    it('should remove person', () => {
      const action = new debtManagementActions.DeletePersonAction({person: oldState.persons[0]});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons.length).toEqual(1);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.DeletePersonAction({person: oldState.persons[0]});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('CreateDebtAction', () => {
    it('should add new debt to person', () => {
      const action = new debtManagementActions.CreateDebtAction({person: oldState.persons[0], debt: newDebt});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[0].debts.length).toEqual(3);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.CreateDebtAction({person: oldState.persons[0], debt: newDebt});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons[0].debts.length).toEqual(2);
    });
  });

  describe('EditDebtAction', () => {
    beforeEach(() => {
      newDebt.id = 0;
    });

    it('should update debt', () => {
      const action = new debtManagementActions.EditDebtAction({person: oldState.persons[0], debt: newDebt});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[0].debts[0]).toBe(newDebt);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.EditDebtAction({person: oldState.persons[0], debt: newDebt});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons[0].debts[0]).not.toBe(newDebt);
    });
  });

  describe('DeleteDebtAction', () => {
    it('should remove debt', () => {
      const action = new debtManagementActions.DeleteDebtAction({person: oldState.persons[0], debt: oldState.persons[0].debts[0]});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[0].debts.length).toEqual(1);
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.DeleteDebtAction({person: oldState.persons[0], debt: oldState.persons[0].debts[0]});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons[0].debts.length).toEqual(2);
    });
  });

  describe('PayDebtAction', () => {
    it('should set debt as paid', () => {
      const action = new debtManagementActions.PayDebtAction({person: oldState.persons[0], debt: oldState.persons[0].debts[0]});
      const result = debtManagementReducer(oldState, action);
      expect(result.persons[0].debts[0].isPaid).toBeTruthy();
    });

    it('should not modify old state', () => {
      const action = new debtManagementActions.PayDebtAction({person: oldState.persons[0], debt: oldState.persons[0].debts[0]});
      const result = debtManagementReducer(oldState, action);
      expect(oldState.persons[0].debts[0].isPaid).toBeFalsy();
    });
  });
});
