import { useMemo } from 'react';
import { Column } from 'react-table';

import Table from './components/Table';
import Languages from './components/Languages';
import './App.scss';
import { Country } from './types';
import useCountries from './hooks/useCountries';

function App() {
  const [error, countries] = useCountries();

  const columns: Column<Country>[] = useMemo(
    () => [
      {
        Header: 'Flag',
        accessor: 'flag',
        Cell: ({ cell: { value } }) => <img src={value} alt='country flag' />,
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Capital',
        accessor: 'capital',
      },
      {
        Header: 'Language(s)',
        accessor: 'languages',
        Cell: ({ cell: { value } }) => <Languages languages={value} />,
      },
      {
        Header: 'Population',
        accessor: 'population',
      },
    ],
    []
  );

  return (
    <div className='App'>
      {/* if error then <div>something went wrong</div> */}
      <Table columns={columns} countries={countries} />
    </div>
  );
}

export default App;
