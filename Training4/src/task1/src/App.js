import { useCallback, useEffect, useState } from "react";
import "./App.css";
import {throttle} from 'lodash';

function App() {
  const [joke, setJoke] = useState("");
  const controlClick= useCallback(throttle(()=>getJoke(), 8000),[]) ;

  function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('get New joke')
        setJoke(data);
      });
  }

  useEffect(() => {
    getJoke();
    console.log('get first joke');
  }, []);

  return (
    <div className="App">
      <h1>TRAINING 4 TASK 1</h1>
      <h2>We have a joke like this:</h2>
      <h2 style={{ color: "orange" }}>
        {joke.setup} ... {joke.punchline} :v
      </h2>
      <button onClick={controlClick}>Get more joke</button>
    </div>
  );
}

export default App;
