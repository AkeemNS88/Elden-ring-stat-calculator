import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Display from "./components/Display";


const App = () => {
  const [choices, setChoices] = useState([]);
  const [level, setLevel] = useState('');

  // fetch json class data for initial spread
  const fetchClasses = () => {
    fetch("http://localhost:4000/choices")
      .then((res) => res.json())
      .then((choiceData) => setChoices(choiceData));
  };

  useEffect(fetchClasses, []);

  return (
    <div className="App">
      <h1 class="title">Elden Ring Stat Calculator</h1>
      <div className="level display">
        <Display choices={choices} level={level} setLevel={setLevel}/>
        <div className="stat table">
          <Button />
        </div>
      </div> 
    </div>
  );
}

export default App;
