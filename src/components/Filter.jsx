import React from 'react';

const Filter = ({ filter, setFilter, onFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Title"
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Rating"
        value={filter.rate}
        onChange={(e) => setFilter({ ...filter, rate: e.target.value })}
      />
      <button onClick={onFilter}>Filter</button>
    </div>
  );
};

export default Filter;
