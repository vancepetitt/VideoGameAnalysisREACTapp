import {useState, useEffect} from 'react';
import {Chart} from 'react-google-charts';




const DisplayPlatformStats = ({videoGames}) => {

    console.log(videoGames);

    let filteredGames = videoGames.filter(game => game.year >= 2013);

    console.log('Filtered Games', filteredGames);

    let platforms = filteredGames.map(game => {
        return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatforms = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatforms);

    function generateDataForChart(){
        const data = [
            ["Element", "Density", { role: "style" }],
            
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