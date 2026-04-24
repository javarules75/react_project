import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Countries() {
  const [countries,setCountries]  = useState([]);

  useEffect(() =>{
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies').then((response) => {
      setCountries(response.data);
    }).catch((error) => {
      console.error('Error fetching countries:', error);
    });
  },[])
  return (
    <div>
        <select>
            <option>Select a country</option>
            {countries.map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
        </select>
      
    </div>
  )
}

export default Countries
