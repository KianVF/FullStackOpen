const PersonForm = ({
  submitInfo,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={submitInfo}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
