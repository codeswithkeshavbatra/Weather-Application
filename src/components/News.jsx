import React, {useState, useEffect} from "react";
import Cards from "./Cards";
import './News.css';

const News = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState(null);
  // const Api_key = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
  const url = "https://newsapi.org/v2/everything?q=";
  // const Api_key = "3f30cf8b0b0b46da96241e5935e5a459"

  const getInput = (input) => {
    // console.log(input.target.value);
    setSearch(input.target.value);
  }

  const getData = async () => {
    const res = await fetch(`${url}${search}&apiKey=${import.meta.env.VITE_API_KEY }`);
    const data = await res.json();
    // console.log(data)
    // console.log(data.articles);
    setNewsData(data.articles);
  }

  const userInput = (event) => {
    setSearch(event.target.value)
  }

  useEffect(()=>{
    getData()
},[])


  return (
    <div className="News">
      <nav>
        <div>
          <h1>DailyNews</h1>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search news" onChange={getInput} value={search}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="category">
          <button onClick={userInput} value={"Sports"}>Sports</button>
          <button onClick={userInput} value={"Entertainment"}>Entertainment</button>
          <button onClick={userInput} value={"Fainence"}>Fainence</button>
          <button onClick={userInput} value={"Politics"}>Politics</button>
      </div>
      
      <div>
        {newsData ? <Cards data={newsData} /> : null}
      </div>
    </div>
  );
};

export default News;