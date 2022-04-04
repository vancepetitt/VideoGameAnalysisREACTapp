import React from "react";
import { Chart } from "react-google-charts";

const GameDataChart = ({clickedGames}) => {

    console.log('CLICKED GAMES', clickedGames )

    let gameSalesArrays = clickedGames.map(game => {
        return [game.platform, game.globalSales];
    });

    // console.log('search platforms', platforms);

    // let distinctPlatforms = [...new Set(platforms)]
    // console.log(distinctPlatforms);

    // let gameSalesArrays = distinctPlatforms.map(platform => {
    //     let gamesForPlatform = clickedGames.filter(game => game.platform == platform)
    //     let platformSales = 0

    //     gamesForPlatform.forEach((game) => {
    //         platformSales += parseInt(game.globalSales)
    //     });
    //     return [platform, platformSales]
    // });

    //console.log('gamesalesarrays', gameSalesArrays);
    
    function generateDataForChart(){
        const data = [
            ["Platform", 'Sales'], 
           ...gameSalesArrays
        ];
            console.log(data);
            return data;
    };         
    
    return ( 
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="PieChart" width="100%" height="400px" data={generateDataForChart()} />
        </div>
    );
};
export default GameDataChart;
