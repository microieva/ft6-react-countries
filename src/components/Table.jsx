import { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

import SearchBar from './SearchBar';

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter,  
  } = useTable({
    columns,
    data
  }, useFilters, useSortBy);

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("name", value); 
    setFilterInput(value);
  };


  return (
    <>
      <SearchBar 
        filterInput={filterInput} 
        handleFilterChange={handleFilterChange}
      />
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                  ? column.isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : ""
                }
              >
                {column.render("Header")} 
                <i className="fas fa-sort"></i>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
          prepareRow(row);
          return (
           
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            
          );
        })}
      </tbody>
    </table>
    </>  
  );
}