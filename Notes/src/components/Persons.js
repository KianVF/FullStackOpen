const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);
const Persons = ({ persons, newFilter, showAll }) => {
  if (showAll) {
    return (
      <div>
        {persons.map((p) => (
          <Person key={p.name} name={p.name} number={p.number} />
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
export default Persons;
