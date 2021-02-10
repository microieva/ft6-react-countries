import axios from 'axios';

import { useEffect, useState } from 'react';
import { Country } from '../types';

type ReturnType = [Error | null, Country[]];

const useCountries = (): ReturnType => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const result = await axios('https://restcountries.eu/rest/v2/all');
      setCountries(result.data);
    } catch (error) {
      setError(error);
    }
  };

  return [error, countries];
};

export default useCountries;
