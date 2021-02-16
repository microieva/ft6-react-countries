import { useState } from 'react';
import { 
  useTable, 
  useFilters, 
  useSortBy,
  Column } from 'react-table';

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from "@material-ui/core/Button"

import { Country } from '../types';
import Header from './Header';
import useStyles from '../hooks/useTableStyles';

type TableProps = {
  columns: Column<Country>[],
  countries: Country[]
}

export default function Table({ columns, countries }: TableProps) {
  const [filterInput, setFilterInput] = useState('')
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter, // The useFilter Hook provides a way to set the filter
  } = useTable<Country>(
    {
      columns,
      data: countries,
    },
    useFilters,
    useSortBy
  )

  const classes = useStyles();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setFilter('name', value)
    setFilterInput(value)
  }

  return (
    <div>
      <Header 
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
      />
      <MaUTable {...getTableProps()}>
        <TableHead className={classes.headerRow}>
          {headerGroups.map(headerGroup => (
            <TableRow 
              
              {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <i className='fas fa-sort'></i>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow className={classes.row} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell 
                      className={classes.cell}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                      
                    </TableCell>
                    
                  );
                })}
                <Button variant="contained" color="primary">
                  Add
                </Button> 
                
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </div>
  );
}
