import React from "react";
import { Chart } from "react-google-charts";

const GameDataChart = ({videoGames}) => {
    
    // async function getVideoGameById (prop) {
        
    // //     //add id as variable in the url
    // //     //let game = await axios.get("https://localhost:7260/api/games/10");
    // //     let game = await axios.get("http://localhost:57067/api/games/10");
    // //     setSelectedVideoGame(game.data);
    // //     console.log(game.data);
    // //   };
    
    // let filteredGames = videoGames.filter(game => game.name == )
    
    





      
    function generateDataForChart(){
        const data = [
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
        // ["platform", platformArrays, { role: "style" }],
        // ...platformArrays
        ];

        return data;
        }
    
    
    
    
    
    
    
    return ( 
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="PieChart" width="100%" height="400px" data={generateDataForChart()} />
        </div>
    ); 
}

export default GameDataChart;
