
type SearchBarProps = {
    filterInput: string,
    handleFilterChange: ()=> void
}

const SearchBar = ({filterInput, handleFilterChange}: SearchBarProps) => {
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
