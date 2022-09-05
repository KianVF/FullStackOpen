import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [weather, setWeather] = useState(0);
  const [capitalInfo, setCapitalInfo] = useState(0);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log("fafa");
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const showDetails = (countryName) => {
    setNewFilter(countryName);
  };
  const getWeather = (capitalInfo) => {};

  const api_key = "def5d565b5611b527557b695a2b9a0f5";

  return (
    <div>
      <Search newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <CountriesList
        countries={countries}
        newFilter={newFilter}
        showDetails={showDetails}
        getWeather={getWeather}
        weather={weather}
        setWeather={setWeather}
        api_key={api_key}
        setCapitalInfo={setCapitalInfo}
      />
    </div>
  );
};

export default App;
