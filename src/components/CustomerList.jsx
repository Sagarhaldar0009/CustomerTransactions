import React from 'react';

function CustomerList({ customers, topCustomer }) {
  return (
    <div>
      <h2>Top Customer: {topCustomer.name} (${topCustomer.total})</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.name}>
            {customer.name}: ${customer.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;