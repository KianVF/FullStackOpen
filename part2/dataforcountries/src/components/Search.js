const Search = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      <p>
        find countries:
        <input value={newFilter} onChange={handleFilterChange} />
      </p>
    </div>
  );
};

export default Search;
