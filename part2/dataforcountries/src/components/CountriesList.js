const CountriesList = ({ countries, newFilter }) => {
  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(newFilter.toLowerCase())
  );
  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map((c) => (
          <p key={c.name.common}>{c.name.common}</p>
        ))}
      </div>
    );
  } else if (filteredCountries.length === 1) {
    return <Details filteredCountries={filteredCountries} />;
  }
};
const Details = ({ filteredCountries }) => {
  return (
    <div>
      <h1>{filteredCountries[0].name.common}</h1>
      <div>
        <p>Capital: {filteredCountries[0].capital[0]}</p>
        <p>Area: {filteredCountries[0].area}</p>
      </div>
      <h2>Langueges:</h2>
      <div>
        <ul>
          {Object.values(filteredCountries[0].languages).map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <img src={filteredCountries[0].flags.png} />
      </div>
    </div>
  );
};
export default CountriesList;
