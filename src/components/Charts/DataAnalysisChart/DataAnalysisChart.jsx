import {useState, useEffect} from 'react';
import {Chart} from 'react-google-charts';

const DisplayHistoricalStats = ({videoGames}) => {

    function generateDataForChart(){

    //filter games for xbox 360 - code: X360
    let filteredGames = videoGames.filter(game => game.platform === 'X360');
    console.log('Filtered Games', filteredGames);
    //returns all years for Xbox 360 sales
    let years = filteredGames.map(game => {
        return game.year
    });
    console.log('Years', years)

    //return all unique years
    let distinctYears = [...new Set(years)]
    distinctYears.sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log('Distinct Years', distinctYears);

    //gives the array that will be used to geneerate the chart
    let yearlyData = distinctYears.map(years => {
        
        let xbox360SalesPerYear = 0
        let gamesPerYear = filteredGames.filter(game => game.year === years)

        gamesPerYear.forEach((game) => {
            xbox360SalesPerYear += parseInt(game.globalSales)
        });
        return [years, xbox360SalesPerYear]
    });

    const data = [
            [
                "Year", 
                "sales per year\n(millions)"
            ],
              ...yearlyData
            ];
        console.log(data);
        return data;
    }
        const options = {
            chart: {
              title: "Global Sales",
              subtitle: "millions",
              
            },
        };

    return (
        <div>
            <h1>Xbox 360 lifetime sales</h1>
            <Chart chartType="Line" width="100%" height="400px" data={generateDataForChart()} options={options}/>
        </div>
    );
}

export default DisplayHistoricalStats;

// ["PS3", 8.94, "silver"], // RGB value
// ["Silver", 10.49, "silver"], // English color name
// ["Gold", 19.3, "silver"],
// ["Platinum", 21.45, "silver"], // CSS-style declaration