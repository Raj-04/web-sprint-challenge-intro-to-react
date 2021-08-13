import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [characterDetails, setCharacterDetails] = useState(null)
  const [error, setError] = useState(null);

  const openInfo = character => {
    setCharacterDetails( character )
  }

  const closeInfo = () => {
    setCharacterDetails(null)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      setCharacters(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.error(err);
      setError("Sorry, Error for the Characters!")
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT STAR WARS</h1>
    </div>
  );
}

export default App;
