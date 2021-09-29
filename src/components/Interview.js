import axios from "axios";
import React, { useState, useEffect } from "react";

const Interview = () => {
  //State
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  //Retrieve data from api and save in Data state on initial component mount
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://restcountries.eu/rest/v2/all");
      setData(result.data);
    }
    fetchData();
  }, []);

  //Save input field on change and add to search term state
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //Filter data with search term, save in search result state, display 10 results
  useEffect(() => {
    const results = data.filter((result) =>
      result.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results.slice(0, 10));
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((country) => (
          <li key={country.alpha2Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interview;
