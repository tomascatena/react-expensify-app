// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

// Styles
import './index.css';

// ???
import reportWebVitals from './reportWebVitals';

// redux store
import configureStore from './store/configureStore';

// Selectors
import getVisibleExpenses from './selectors/expenses';

// action generators
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

// import Playground from './playground/hoc';

const store = configureStore();

// console.log(store.getState());

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 450000,
    createdAt: 1000,
    note: 'Monthly payment',
  })
);
store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 300000,
    note: '',
    createdAt: -777777777,
  })
);
store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
    note: 'Rent from January',
    createdAt: 100000000000,
  })
);

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
