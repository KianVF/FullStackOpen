import axios from "axios";
import { useEffect } from "react";
const CountriesList = ({
  countries,
  newFilter,
  showDetails,
  getWeather,
  weather,
  setWeather,
  api_key,
  setCapitalInfo,
}) => {
  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(newFilter.toLowerCase())
  );

  // useEffect(() => {
  //   if (filteredCountries !== undefined) {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${filteredCountries[0].capitalInfo.latlng[0]}&lon=${filteredCountries[0].capitalInfo.latlng[1]}&appid=${api_key}`
  //       )
  //       .then((response) => {
  //         setWeather(response.data);
  //       });
  //   }
  // }, []);

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
          <Name
            key={c.name.common}
            name={c.name.common}
            showDetails={showDetails}
          />
        ))}
      </div>
    );
  } else if (filteredCountries.length === 1) {
    return (
      <Details
        filteredCountries={filteredCountries}
        getWeather={getWeather}
        capitalInfo={filteredCountries[0].capitalInfo}
        weather={weather}
        setWeather={setWeather}
        api_key={api_key}
      />
    );
  }
};

const Name = ({ name, showDetails }) => {
  return (
    <p>
      {name}
      <button onClick={() => showDetails(name)}>show</button>
    </p>
  );
};

const Details = ({
  filteredCountries,
  getWeather,
  capitalInfo,
  weather,
  setWeather,
  api_key,
}) => {
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${capitalInfo.latlng[0]}&lon=${capitalInfo.latlng[1]}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capitalInfo.latlng, api_key, setWeather]);
  // console.log(weather.weather);

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
      <h2>Weather in {filteredCountries[0].capital}</h2>
      <Weather country={filteredCountries[0]} weather0={weather} />
    </div>
  );
};
const Weather = ({ country, weather0 }) => {
  if (weather0 !== 0) {
    return (
      <div>
        <p>Temperature: {weather0.main.temp} celsius</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CountriesList;
