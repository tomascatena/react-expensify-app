import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, id, amount, createdAt, dispatch }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        Amount: ${amount / 100} - {new Date(createdAt).toString()}
      </p>
    </div>
  );
};

export default ExpenseListItem;
