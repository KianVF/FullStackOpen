import { useEffect, useState } from "react";
import Persons from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newFilter, setNewFilter] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        submitInfo={submitInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} showAll={showAll} />
    </div>
  );
};

export default App;
