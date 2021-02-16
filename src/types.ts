export type Language = {
    name: string;
  };
  
  export type Country = {
    flag: string;
    name: string;
    capital: string;
    population: number;
    languages: Language[];
  };
  
  export type InputProps = {
    filterInput: string,
    handleFilterChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}