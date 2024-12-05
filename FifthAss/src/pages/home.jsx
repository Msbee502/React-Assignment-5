import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://wizard-world-api.herokuapp.com/Houses").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <input type="text" 
      placeholder="Enter your house" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />
      {data.filter((item) =>{
        return search.toLowerCase() === "" ? item : item.name.toLowercase().includes(search)
      }).map((item, index) => (
        <ul key={index}>
          <li>House name{item.name}</li>
          <li>Founder {item.founder}</li>
          <li>Animal {item.animal}</li>
        </ul>
      ))}
    </div>
  );  
}
  
  export default Home;