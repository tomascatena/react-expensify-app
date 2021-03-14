import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const newExpense = {
    id: '999',
    description: 'New expense description',
    note: 'New expense note',
    createdAt: 123456789,
    amount: 29500,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('Should edit an expense', () => {
  const updates = {
    description: 'Updated description',
    note: 'Updated note',
    amount: 777,
    createdAt: moment(0),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates,
  };
  const updatedExpense = {
    ...expenses[0],
    ...updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(updatedExpense);
});

test('Should not edit an expense if expense not found', () => {
  const updates = {
    description: 'Updated description',
    note: 'Updated note',
    amount: 777,
    createdAt: moment(0),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
