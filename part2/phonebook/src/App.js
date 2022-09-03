import { useState } from "react";

const Persons = ({ persons, newFilter, showAll }) => {
  if (showAll) {
    return (
      <div>
        {persons.map((p) => (
          <p key={p.name}>
            {p.name} {p.number}
          </p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {persons
          .filter((p) => p.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map((p) => (
            <p key={p.name}>
              {p.name} {p.number}
            </p>
          ))}
      </div>
    );
  }
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newFilter, setNewFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    event.target.value === "" ? setShowAll(true) : setShowAll(false);
    console.log(showAll);
    setNewFilter(event.target.value);
  };
  const submitInfo = (event) => {
    event.preventDefault();
    if (!persons.map((p) => p.name).includes(newName)) {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          filter shown with:
          <input value={newFilter} onChange={handleFilterChange} />
        </p>
      </div>
      <h2>add a new</h2>
      <form onSubmit={submitInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} showAll={showAll} />
    </div>
  );
};

export default App;
