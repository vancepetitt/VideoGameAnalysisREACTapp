import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchBarName from './components/SearchBar/SearchBarName/SearchBarName';
import SearchBarGenre from './components/SearchBar/SearchBarGenre/SearchBarGenre';
import SearchBarPlatform from './components/SearchBar/SearchBarPlatform/SearchBarPlatform';
import SearchBarPublisher from './components/SearchBar/SearchBarPublisher/SearchBarPublisher';
import DisplayVideoGames from './components/DisplayVideoGames/DisplayVideoGames';
import DisplayPlatformStats from './components/Charts/ConsoleDataChart/ConsoleDataChart';
import DisplayHistoricalStats from './components/Charts/DataAnalysisChart/DataAnalysisChart';
import GameDataChart from './components/Charts/GameDataChart/GameDataChart';


function App() {

  const[videoGames, setVideoGames] = useState([]);
  const[selectedVideoGame, setSelectedVideoGame] = useState([]);
  const[matchingGames, setMatchingGames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, [])

  async function getAllVideoGames(prop){
    try{
    let response = await axios.get("http://localhost:57067/api/games");
    //let response = await axios.get("https://localhost:7260/api/games");
    setVideoGames(response.data);
    }catch(ex){
      console.log(`Error in getAllVideoGames EXCEPTION: ${ex}`)
    }
    // console.log(response.data);
  };

  async function getVideoGameById (prop) {
    //let game = await axios.get("https://localhost:7260/api/games/10");
    let game = await axios.get("http://localhost:57067/api/games/10");
    setSelectedVideoGame(game.data);
    console.log(game.data);
  };

  const filterByName = (searchTerm) => {
    let matchingGames = videoGames.filter((game) => {
      if(game.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    setMatchingGames(matchingGames)
    console.log(matchingGames);
  };

  const filterByGenre = (searchTerm) => {
    let matchingGames = videoGames.filter((game) => {
      if(game.genre.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    setMatchingGames(matchingGames)
    console.log(matchingGames);
  };

  const filterByPlatform = (searchTerm) => {
    let matchingGames = videoGames.filter((game) => {
      if(game.platform.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    setMatchingGames(matchingGames)
    console.log(matchingGames);
  };

  const filterByPublisher = (searchTerm) => {
    let matchingGames = videoGames.filter((game) => {
      if(game.publisher.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
      else return false;
    });
    setMatchingGames(matchingGames)
    console.log(matchingGames);
  };

  return (
    <div className="App">
      <h1>Video Game Analysis</h1>
      <SearchBarName filterByName={filterByName}/>
      <SearchBarGenre filterByGenre={filterByGenre}/>
      <SearchBarPlatform filterByPlatform={filterByPlatform}/>
      <SearchBarPublisher filterByPublisher={filterByPublisher}/>
      {/* <GameDataChart clickedGames={clickedGames}/> */}
      <DisplayVideoGames matchingGames={matchingGames}/>
      <DisplayPlatformStats videoGames={videoGames} />
      <DisplayHistoricalStats videoGames={videoGames} />
    </div>
  );
};

export default App;
