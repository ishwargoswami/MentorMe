// SearchList.js

import React from 'react';
import SearchCard from './SearchCard';
import './SearchList.css';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person => <SearchCard key={person.id} person={person} />);
  
  return (
    <div className="search-list">
      {filtered}
    </div>
  );
}

export default SearchList;
