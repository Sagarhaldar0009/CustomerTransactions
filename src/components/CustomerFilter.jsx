import React from 'react';

function CustomerFilter({ filter, setFilter }) {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter customers by name"
      />
    </div>
  );
}

export default CustomerFilter;