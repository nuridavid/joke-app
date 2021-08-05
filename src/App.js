import React, { useState } from "react";
import axios from "axios";
const url = "https://v2.jokeapi.dev/joke/programming";

function App() {
  const [joke, setJoke] = useState(null);
  let clickFunction = () => {
    axios
      .get(url)
      .then((res) => {
        setJoke(res.data);
        console.log(res.data);
      })
      .catch(
        function (err) {
          console.log(err);
        },
        [joke]
      );
  };
  return (
    <div>
      <button onClick={() => clickFunction()}>Programming</button>
      <div>{joke?.setup}</div>
      <div>{joke?.delivery}</div>
      <div>{joke?.joke}</div>
    </div>
  );
}

export default App;

// "error": false,
// "category": "Pun",
// "type": "twopart",
// "setup": "I'm thinking of setting up a comedy group to help people going through cancer treatment.",
// "delivery": "I'll call it \"A Sense of Tumor\".",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 97,
// "safe": false,
// "lang": "en"
