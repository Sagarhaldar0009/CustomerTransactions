import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerFilter from './components/CustomerFilter';

const transactions = [
  { id: 't_01', customer: 'Rose Roberts', amount: 84 },
  { id: 't_02', customer: 'Chris Cook', amount: 30 },
  { id: 't_03', customer: 'Mary Martin', amount: 42 },
  { id: 't_04', customer: 'Susan Smith', amount: 26 },
  { id: 't_05', customer: 'Rose Roberts', amount: -84 },
  { id: 't_06', customer: 'Rose Roberts', amount: 48 },
  { id: 't_07', customer: 'Susan Smith', amount: 104 },
  { id: 't_08', customer: 'Larry Lewis', amount: 140 },
  { id: 't_09', customer: 'Mary Martin', amount: 10 },
  { id: 't_10', customer: 'Chris Cook', amount: 60 },
  { id: 't_11', customer: 'Susan Smith', amount: -26 },
  { id: 't_12', customer: 'Larry Lewis', amount: -140 },
  { id: 't_13', customer: 'Rose Roberts', amount: 26 },
  { id: 't_14', customer: 'Ryan Roberts', amount: 44 }
];

function App() {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState(localStorage.getItem('filter') || '');

  useEffect(() => {
    const customerSpending = transactions.reduce((acc, transaction) => {
      acc[transaction.customer] = (acc[transaction.customer] || 0) + transaction.amount;
      return acc;
    }, {});

    const customerArray = Object.keys(customerSpending).map((customer) => ({
      name: customer,
      total: customerSpending[customer],
    }));

    setCustomers(customerArray);
  }, []);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  const topCustomer = filteredCustomers.reduce((prev, current) => (prev.total > current.total ? prev : current), { total: 0 });

  return (
    <div className="App">
      <h1>Customer Transactions</h1>
      <CustomerFilter filter={filter} setFilter={setFilter} />
      <CustomerList customers={filteredCustomers} topCustomer={topCustomer} />
    </div>
  );
}

export default App;
