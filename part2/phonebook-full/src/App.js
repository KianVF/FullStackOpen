import { useEffect, useState } from "react";
import Persons from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";
import service from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newFilter, setNewFilter] = useState("");
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("green");

  useEffect(() => {
    service.getAll().then((people) => {
      setPersons(people);
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
      service.create(nameObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewMessage(`Added ${newName}`, "green");
      });
      setNewName("");
      setNewNumber("");
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        const nameObject = {
          name: newName,
          number: newNumber,
        };
        service
          .updateNumber(
            persons.find((person) => person.name === newName).id,
            nameObject
          )
          .then((updatedPerson) => {
            service.getAll().then((people) => {
              setPersons(people);
            });
            setNewMessage(`Updated ${newName}`, "blue");
          })
          .catch((error) => {
            setNewMessage(
              `Information of ${newName} has already been removed from server`,
              "red"
            );
          });
      }
    }
  };
  const removePerson = (name, personId) => {
    if (window.confirm(`Delete ${name}`)) {
      service.deletePerson(personId).then((removedPerson) => {
        service.getAll().then((people) => {
          setPersons(people);
          setNewMessage(`Removed ${name}`, "red");
        });
      });
    }
  };
  const setNewMessage = (message, msgColor) => {
    setMessageColor(msgColor);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} msgColor={messageColor} />
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
      <Persons
        persons={persons}
        newFilter={newFilter}
        showAll={showAll}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
