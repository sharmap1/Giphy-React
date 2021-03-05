import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Giphy } from "./components/Giphy";
import Header from "./components/Header";

const App = () => {
  // const GIPHY_API = "https://api.giphy.com/v1/gifs/search?";
  // const GIPHY_KEY = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

  const [giphy, setGiphy] = useState([]);
 
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${query}`,
        {
          params: {
            api_key: "76gn3ScpMZmbe3Rh00QXc8o2KQL0mfW7",
          },
        }
      );
      console.log(result);
      setGiphy(result.data.data);
      // [0].images.downsized_large
    };
    fetchData();
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearchClick = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <Header
        search={search}
        updateSearch={updateSearch}
        onSearchClick={onSearchClick}
      />
      <Giphy giphy={giphy} />
    </>
  );
};

export default App;
