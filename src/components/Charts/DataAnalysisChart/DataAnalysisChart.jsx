import {useState, useEffect} from 'react';
import {Chart} from 'react-google-charts';

const DisplayHistoricalStats = ({videoGames}) => {

    function generateDataForChart(){

    // console.log(videoGames);

    //filter newer than 2013:
    let filteredGames = videoGames.filter(game => game.year >= 2000);
    console.log('Filtered Games', filteredGames);

    //returns all platforms (from games newer than 2013)
    let platforms = filteredGames.map(game => {
        return game.platform
    });
    console.log('Platforms', platforms)

    //returns only the unique platforms
    let distinctPlatforms = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatforms);

    //returns all years (after 2000)
    let years = filteredGames.map(game => {
        return game.year
    });
    console.log('Years', years)

    //return all unique years
    let distinctYears = [...new Set(years)]
    console.log('Distinct Years', distinctYears);

    //gives the array that will be used to geneerate the chart
    let platformArrays = distinctYears.map(years => {
        
        let globalPlatformSalesPerYear = 0

        let platformsPerYear = distinctPlatforms.map(platform => {
            let gamesForPlatform = filteredGames.filter(game => game.platform == platform)
            console.log(gamesForPlatform)

            let globalPlatformSales = 0

            gamesForPlatform.forEach((game) => {
                globalPlatformSales += parseInt(game.globalSales)
            });
            return [platform, globalPlatformSales]
        });
        console.log(platformsPerYear)
        // let gamesPerYear = filteredGames.filter(game => game.year === years)
        // let gamesForPlatform = filteredGames.filter(game => game.platform === platforms)

        // let globalPlatformSalesPerYear = 0

        // gamesForPlatform.forEach((game) => {
        //     globalPlatformSalesPerYear += parseInt(game.globalSales)
        // });
        return [years, platformsPerYear]
    });

    console.log("platform arrays", platformArrays);

        const data = [
            [
                "year", 
                "platformsPerYear"
            ],
              ...platformArrays
            ];

            return data;
    }
        const options = {
            chart: {
              title: "Global Sales by Platform Since 2000",
              subtitle: "in millions",
            },
        };

    return (
        <div>
            <h1>Global Sales by Platform Since 2000</h1>
            <Chart chartType="Line" width="100%" height="400px" data={generateDataForChart()} options={options}/>
        </div>
    );
}

export default DisplayHistoricalStats;

// ["PS3", 8.94, "silver"], // RGB value
// ["Silver", 10.49, "silver"], // English color name
// ["Gold", 19.3, "silver"],
// ["Platinum", 21.45, "silver"], // CSS-style declaration