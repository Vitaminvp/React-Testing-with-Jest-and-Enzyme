import React from 'react';
import './App.css';
import GuestWords from "./GuestWords";
import Congrats from "./Congrats";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true}/>
      <GuestWords guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}/>
    </div>
  );
}

export default App;
