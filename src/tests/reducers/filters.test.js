import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = {
    type: 'SORT_BY_DATE',
  };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'rent',
  };
  const state = filterReducer(currentState, action);
  expect(state.text).toBe('rent');
});

test('Should set startDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month'),
  };
  const state = filterReducer(currentState, action);
  expect(state.startDate).toEqual(moment().startOf('month'));
});

test('Should set endDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month'),
  };
  const state = filterReducer(currentState, action);
  expect(state.endDate).toEqual(moment().endOf('month'));
});
