const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      <p>
        filter shown with:
        <input value={newFilter} onChange={handleFilterChange} />
      </p>
    </div>
  );
};
export default Filter;
