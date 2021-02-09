import { useState, useEffect, useMemo } from "react";
import { Accessor, CellProps, Column } from "react-table";

import axios from 'axios';

import Table from "./components/Table";
import "./App.scss";
 
function App (){
  type Language = {
    name: string
  }
  
  type Country = {
    flag:string,
    name: string,
    capital: string,
    population: number,
    languages: Language[]
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const data = useMemo<Country[]>(() => countries, []);
  //do we use HOOKS useEffect ??
  useEffect(() => {
    (async () => {
      const result = await axios('https://restcountries.eu/rest/v2/all');
      setCountries(result.data);
      
    })();
    
  }, []);

  

  const columns: Column<Country>[] = useMemo(() => [
    {
      Header: "Flag",
      accessor: "flag",
      Aggregated: ({ cell: {value:string}}):CellProps<Country> => <img src=${value} alt="country flag" />
    },
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
      Cell: ({ cell: { value }}):CellProps<Country> => `<Languages languages=${value} />`
    },
    {
      Header: "Population",
      accessor: "population"
    }
  ], [])

  const Languages: {{languages : <Language[]>}} => {
    return (
      <div>
        {languages.map((lang, idx) => {
          return (
            <span key={idx} className="badge">
              {lang.name}
            </span>
          );
        })}
      </div>
    );
  };


  return (  
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

