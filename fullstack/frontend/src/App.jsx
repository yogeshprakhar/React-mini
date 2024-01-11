import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Jokes</h1>
      <p>Total Jokes = {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h5>{joke.title}</h5>
          <p>{joke.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
