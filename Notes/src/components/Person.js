const Person = ({ name, number, id, removePerson }) => (
  <tr>
    <td>{name}</td>
    <td>{number}</td>
    <td>
      <button onClick={() => removePerson(name, id)}>delete</button>
    </td>
  </tr>
);
const Persons = ({ persons, newFilter, showAll, removePerson }) => {
  if (showAll) {
    return (
      <div>
        <table>
          <tbody>
            {persons.map((p) => (
              <Person
                key={p.id}
                name={p.name}
                number={p.number}
                id={p.id}
                removePerson={removePerson}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            {persons
              .filter((p) =>
                p.name.toLowerCase().includes(newFilter.toLowerCase())
              )
              .map((p) => (
                <Person
                  key={p.id}
                  name={p.name}
                  number={p.number}
                  id={p.id}
                  removePerson={removePerson}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
};
export default Persons;
