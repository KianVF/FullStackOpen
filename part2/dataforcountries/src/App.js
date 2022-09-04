import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(newFilter);
  };

  return (
    <div>
      <Search newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <CountriesList countries={countries} newFilter={newFilter} />
    </div>
  );
};

export default App;
