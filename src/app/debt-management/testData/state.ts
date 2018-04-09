import {Debt} from '../models/debt';
import {Person} from '../models/person';
import {IState} from '../store/reducers/debtManagement.reducer';

export function getTestState(): IState {
  return {
    persons: [
      new Person({
        id: 0,
        name: 'Nepomuk',
        description: 'some ugly guy',
        debts: [
          new Debt({
            id: 0,
            title: 'beer',
            amount: 100,
            description: 'drunk a lot of beer',
            isPaid: false
          }),
          new Debt({
            id: 1,
            title: 'lost a bet',
            amount: 10,
            description: 'he thought i was not brave enough to shit in the girls-shower',
            isPaid: true
          })
        ]
      }),
      new Person({
        id: 1,
        name: 'Sepp',
        description: 'this idiot is so broke, why did i lend him some money?!?!?!?',
        debts: [
          new Debt({
            id: 0,
            title: 'bitcoins',
            amount: 30000,
            description: 'this idiot bought bitcoins in 2017Q4...',
            isPaid: false
          }),
          new Debt({
            id: 1,
            title: 'pizza',
            amount: 100,
            description: 'with salami :)',
            isPaid: false
          })
        ]
      })
    ]
  };
}
