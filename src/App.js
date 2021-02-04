import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';

import Table from "./components/Table";
import "./App.scss";

const Languages = ({ languages }) => {
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
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios('https://restcountries.eu/rest/v2/all');
      setCountries(result.data);
      
    })();
    
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Country",
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