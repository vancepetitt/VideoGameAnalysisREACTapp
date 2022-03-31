import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchBarName from './components/SearchBarName/SearchBarName';



function App() {

  const[videoGames, setVideoGames] = useState('');
  const[selectedVideoGame, setSelectedVideoGame] = useState('');

  useEffect(() => {
    getAllVideoGames();
  }, [])

  async function getAllVideoGames(prop){
    let response = await axios.get("http://localhost:57067/api/games");
    // 57067 - Vance's localhost port
    // 7260 - Kat's localhost port
    setVideoGames(response.data);
    console.log(response.data);
  };

  async function getVideoGameById (prop) {
    let game = await axios.get("http://localhost:57067/api/games/10");
    // 57067 - Vance's localhost port
    // 7260 - Kat's localhost port
    setSelectedVideoGame(game.data);
    console.log(game.data);
  }

  const filterByName = (searchTerm) => {
    let matchingGames = videoGames.filter((game) => {
      if(game.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    console.log(matchingGames);
  };

  return (
    <div className="App">
      <h1>Video Game Analysis</h1>
      <SearchBarName filterByName={filterByName}/>

    </div>
  );
}

export default App;
