import "./App.css";
import { useEffect, useState } from "react";
import Country from "./Country";
import { debounce } from "lodash";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [listContries, setListContries] = useState([]);

  const getAPI = (url) => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListContries(data);
      })
  };

  const searchCountry = () => {
    if (searchTerm.length > 0) {
      console.log(searchTerm);
      getAPI(`https://restcountries.eu/rest/v2/name/${searchTerm}`);
    } else getAPI("https://restcountries.eu/rest/v2/all");
  };

  const searchTermLimit = debounce(searchCountry, 1000);

  useEffect(() => {
    searchTermLimit();
    return searchTermLimit.cancel;
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>TRAINING 4 TASK 2 </h1>
      <h1 style={{ color: "deeppink" }}>
        What contries you want to explore ?{" "}
      </h1>
      <input
        style={{ width: "500px", fontSize: "22px" }}
        type="text"
        name="country"
        value={searchTerm}
        placeholder="please enter the country'name you want to explore"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {listContries.length >= 0?
          listContries.map((country) => {
            return (
              <Country
                key={country.name}
                name={country.name}
                urlImg={country.flag}
              />
            );
          }):<h1>No result can found</h1>}
      </div>
    </div>
  );
}

export default App;
