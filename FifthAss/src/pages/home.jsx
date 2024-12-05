import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/home.css";
// import {FontAwesomeIcon} from "fa-solid fa-magnifying-glass"

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    Axios.get("https://wizard-world-api.herokuapp.com/Houses")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    const results = data.filter((item) =>
      search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          className="search-field"
          type="text"
          placeholder="Enter your house"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="suggestions">
        {filteredData.map((item, index) => (
          <ul key={index}>
            <li>House Name: {item.name}</li>
            <li>Founder: {item.founder}</li>
            <li>Animal: {item.animal}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
