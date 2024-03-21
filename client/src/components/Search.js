// Search.js

import React, { useState } from 'react';
import './Search.css';
import Scroll from './Scroll';
import SearchList from './SearchList';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Search({ details }) {
  useEffect(()=>{
    AOS.init({
        offset:250,
        duration:1000});
},[]);
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person.name.toLowerCase().includes(searchField.toLowerCase()) ||
        person.domain.toLowerCase().includes(searchField.toLowerCase())

     
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <section className="search-section" id="search">
      <div className="search-header" data-aos='fade-up'> 
        <h2>Find the right expert</h2>
        <h6>Get Personalized advice from top experts to your specific questions</h6>
      </div>
      <div className="search-input" data-aos='zoom-in'> 
        <input 
          type="search" 
          placeholder="Search Mentor" 
          onChange={handleChange}
        />
      </div>
      <div className="search-results">
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      </div>
    </section>
  );
}

export default Search;
