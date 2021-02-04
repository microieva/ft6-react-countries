import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';

import Table from "./components/Table";
import "./App.scss";

const Languages = ({ languages }) => {
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
    <>
      {languages.map((lang, idx) => {
        return (
          <span key={idx} className="badge">
            {lang.name}
          </span>
        );
      })}
    </>
  );
};

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [countries, setCountries] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios('https://restcountries.eu/rest/v2/all');
      setCountries(result.data);
      
    })();
    
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Country",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Capital",
            accessor: "capital"
          },
          {
            Header: "Language(s)",
            accessor: "languages",
            Cell: ({ cell: { value } }) => <Languages languages={value} />
          },
          {
            Header: "Population",
            accessor: "population"
          },
        ]
      }
    ], []
  )

  return (
    
    <div className="App">
      <Table columns={columns} data={countries} />
    </div>
  );
}

export default App;