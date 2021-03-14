import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'New note value' },
  });
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 60000,
    createdAt: 1615668246749,
    note: 'This was last month rent',
  };

  const action = addExpense(expenseData);

  expect(action.type).toEqual('ADD_EXPENSE');
  expect(action.expense.id).toEqual(expect.any(String));
  expect(action.expense.description).toEqual('Rent');
  expect(action.expense.amount).toEqual(60000);
  expect(action.expense.createdAt).toEqual(1615668246749);
  expect(action.expense.note).toEqual('This was last month rent');
});

test('Should setup add expense action object with default values', () => {
  const expenseData = {};

  const action = addExpense(expenseData);

  expect(action.type).toEqual('ADD_EXPENSE');
  expect(action.expense.id).toEqual(expect.any(String));
  expect(action.expense.description).toEqual('');
  expect(action.expense.amount).toEqual(0);
  expect(action.expense.createdAt).toEqual(0);
  expect(action.expense.note).toEqual('');
});
