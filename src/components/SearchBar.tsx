import React from 'react';

const SearchBar = ({filterInput, handleFilterChange}) => {
    
    return (
        <>
            <input
                type="text"
                value={filterInput}
                onChange={handleFilterChange}
            />
        </>
    )
}

export default SearchBar
