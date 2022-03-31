import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';



function App() {

  const[videoGames, setVideoGames] = useState('');

  async function getAllGames(prop){
    let response = await axios.get("https://localhost:7260/api/games");
    // 57067
    setGames(response.data);
    console.log(response.data);
  };

  return (
    <div className="App">
      <h1>Video Game Analysis</h1>

    </div>
  );
}

export default App;
