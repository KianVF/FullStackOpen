const Person = ({ name, number, id, removePerson }) => (
  <p>
    {name} {number}{" "}
    <button onClick={() => removePerson(name, id)}>delete</button>
  </p>
);
const Persons = ({ persons, newFilter, showAll, removePerson }) => {
  if (showAll) {
    return (
      <div>
        {persons.map((p) => (
          <Person
            key={p.id}
            name={p.name}
            number={p.number}
            id={p.id}
            removePerson={removePerson}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {persons
          .filter((p) => p.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map((p) => (
            <Person
              key={p.id}
              name={p.name}
              number={p.number}
              id={p.id}
              removePerson={removePerson}
            />
          ))}
      </div>
    );
  }
};
export default Persons;
