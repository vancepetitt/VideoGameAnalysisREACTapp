import {useState, useEffect} from 'react';
import {Chart} from 'react-google-charts';




const DisplayPlatformStats = ({videoGames}) => {

    // console.log(videoGames);

    //filter newer than 2013:
    let filteredGames = videoGames.filter(game => game.year >= 2013);
    console.log('Filtered Games', filteredGames);

    //returns all platforms (from games newer than 2013)
    let platforms = filteredGames.map(game => {
        return game.platform
    });
    console.log('Platforms', platforms)

    //returns only the unique platforms
    let distinctPlatforms = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatforms);

    //gives the array that will be used to geneerate the chart
    let platformArrays = distinctPlatforms.map(platform => {
        
        let allGamesForPlatform = filteredGames.filter(game => game.platform == platform)
        let globalPlatformSales = 0
        
        allGamesForPlatform.forEach((game) => {
            globalPlatformSales += parseInt(game.globalSales)
        });
        return [platform, globalPlatformSales, "silver"]
    });

    console.log("platform arrays", platformArrays);

    function generateDataForChart(){
        const data = [
            ["Element", "Density", { role: "style" }],
            ...platformArrays
          ];

          return data;
    }

    return (
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart} />
        </div>
    );
}

export default DisplayPlatformStats;

// ["PS3", 8.94, "silver"], // RGB value
// ["Silver", 10.49, "silver"], // English color name
// ["Gold", 19.3, "silver"],
// ["Platinum", 21.45, "silver"], // CSS-style declaration