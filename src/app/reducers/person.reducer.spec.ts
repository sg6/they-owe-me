import {IState, personReducer} from './person.reducer';
import {Person} from '../models/person';
import {Debt} from '../models/debt';
import * as personActions from '../actions/person.action';

describe('personReducer', () => {
  let oldState: IState;
  let newPerson: Person;
  let newDebt: Debt;
  beforeEach(() => {
    oldState = {
      persons: [
        new Person({
          name: 'Nepomuk',
          description: 'some ugly guy',
          debts: [
            new Debt({amount: 100, description: 'beer', isPaid: false}),
            new Debt({amount: 10, description: 'lost a bet, he thought i was not brave enough to shit in the girls-shower', isPaid: true})
          ]
        }),
        new Person({
          name: 'Sepp',
          description: 'this idiot is so broke, why did i lend him some money?!?!?!?',
          debts: [
            new Debt({amount: 30000, description: 'this idiot bought bitcoins in 2017Q4...', isPaid: false}),
            new Debt({amount: 100, description: 'pizza', isPaid: false})
          ]
        })
      ]
    };

    newPerson = new Person({
      name: 'Franz',
      description: 'smells skunkish',
      debts: []
    });

    newDebt = new Debt({
      amount: 33, description: 'entrance fee for kreisky-concert @ wuk/vienna', isPaid: false
    });
  });

  describe('CreatePersonAction', () => {
    it('should add new person', () => {
      const action = new personActions.CreatePersonAction(newPerson);
      const result = personReducer(oldState, action);
      expect(result.persons[2]).toBe(newPerson);
    });

    it('should not modify old state', () => {
      const action = new personActions.CreatePersonAction(newPerson);
      const result = personReducer(oldState, action);
      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('EditPersonAction', () => {
    it('should update person', () => {
      const action = new personActions.EditPersonAction({personIndex: 1, person: newPerson});
      const result = personReducer(oldState, action);
      expect(result.persons[1]).toBe(newPerson);
    });

    it('should not modify old state', () => {
      const action = new personActions.EditPersonAction({personIndex: 1, person: newPerson});
      const result = personReducer(oldState, action);
      expect(oldState.persons[1]).not.toBe(newPerson);
    });
  });

  describe('DeletePersonAction', () => {
    it('should remove person', () => {
      const action = new personActions.DeletePersonAction(1);
      const result = personReducer(oldState, action);
      expect(result.persons.length).toEqual(1);
    });

    it('should not modify old state', () => {
      const action = new personActions.DeletePersonAction(1);
      const result = personReducer(oldState, action);
      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('CreateDebtAction', () => {
    it('should add new debt to person', () => {
      const action = new personActions.CreateDebtAction({personIndex: 0, debt: newDebt});
      const result = personReducer(oldState, action);
      expect(result.persons[0].debts.length).toEqual(3);
    });

    it('should not modify old state', () => {
      const action = new personActions.CreateDebtAction({personIndex: 0, debt: newDebt});
      const result = personReducer(oldState, action);
      expect(oldState.persons[0].debts.length).toEqual(2);
    });
  });

  describe('EditDebtAction', () => {
    it('should update debt', () => {
      const action = new personActions.EditDebtAction({personIndex: 0, debtIndex: 0, debt: newDebt});
      const result = personReducer(oldState, action);
      expect(result.persons[0].debts[0]).toBe(newDebt);
    });

    it('should not modify old state', () => {
      const action = new personActions.EditDebtAction({personIndex: 0, debtIndex: 0, debt: newDebt});
      const result = personReducer(oldState, action);
      expect(oldState.persons[0].debts[0]).not.toBe(newDebt);
    });
  });

  describe('DeleteDebtAction', () => {
    it('should remove debt', () => {
      const action = new personActions.DeleteDebtAction({personIndex: 0, debtIndex: 0});
      const result = personReducer(oldState, action);
      expect(result.persons[0].debts.length).toEqual(1);
    });

    it('should not modify old state', () => {
      const action = new personActions.DeleteDebtAction({personIndex: 0, debtIndex: 0});
      const result = personReducer(oldState, action);
      expect(oldState.persons[0].debts.length).toEqual(2);
    });
  });

  describe('PayDebtAction', () => {
    it('should set debt as paid', () => {
      const action = new personActions.PayDebtAction({personIndex: 0, debtIndex: 0});
      const result = personReducer(oldState, action);
      expect(result.persons[0].debts[0].isPaid).toBeTruthy();
    });

    it('should not modify old state', () => {
      const action = new personActions.PayDebtAction({personIndex: 0, debtIndex: 0});
      const result = personReducer(oldState, action);
      expect(oldState.persons[0].debts[0].isPaid).toBeFalsy();
    });
  });
});
