// SearchCard.js

import React from 'react';
import './SearchCard.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function SearchCard({ person }) {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:1000});
},[]);
  return(
    <div className="card" data-aos='fade-up'>
    <div className="search-card"  data-aos='flip-right'> 
      <img className="search-card-image" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div className="search-card-details">
        <h2>{person.name}</h2>
        <p>{person.domain}</p>
      </div>
    </div>
    </div>
  );
}

export default SearchCard;
