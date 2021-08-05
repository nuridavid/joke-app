import React, { useState } from "react";
import "./App.css";
const url = "https://v2.jokeapi.dev/joke/programming";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState(null);
  let clickFunction = () => {
    axios
      .get(url)
      .then((res) => {
        setJoke(res.data);
      })
      .catch(
        function (err) {
          console.log(err);
        },
        [joke]
      );
  };
  return <div className="App"></div>;
}

export default App;
