import React, {useState, useEffect} from 'react';
import Chart from 'react-google-charts';


const DisplayVideoGames = ({matchingGames}) => {

    function generatePieChart(game) {
        let clickedName = game.name
        let clickedGames = matchingGames.filter((game) => game.name === clickedName)
        console.log(clickedGames);   
        
        let platforms = clickedGames.map(game => {
            return game.platform
        });
    
        console.log('search platforms', platforms);
    
        let distinctPlatforms = [...new Set(platforms)]
        console.log(distinctPlatforms);
    
        let gameSalesArrays = distinctPlatforms.map(platform => {
            let gamesForPlatform = clickedGames.filter(game => game.platform == platform)
            let platformSales = 0
    
            gamesForPlatform.forEach((game) => {
                platformSales += parseInt(game.globalSales)
            });
            return [platform, platformSales]
        });
        console.log('gamesalesarrays', gameSalesArrays);
        const data = [
            ["platform", gameSalesArrays], ...gameSalesArrays
            // ["Task", "Hours per Day"],
            // ["Work", 11],
            // ["Eat", 2],
            // ["Commute", 2],
            // ["Watch TV", 2],
            // ["Sleep", 7],
        // ["platform", platformArrays, { role: "style" }],
        // ...platformArrays
        ];
        console.log(data);
        return data;
    };


    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Publisher</th>
                        <th>North America Sales (mil)</th>
                        <th>Europe Sales (mil)</th>
                        <th>Japan Sales (mil)</th>
                        <th>Other Sales (mil)</th>
                        <th>Global Sales (mil)</th>
                    </tr>
                </thead>
                <tbody>
                    {matchingGames.map((entry) => {
                        return(
                            <tr key={entry.id}>
                                <td>{entry.rank}</td>
                                <td><button onClick={() => generatePieChart(entry)}>{entry.name}</button></td>
                                <td>{entry.platform}</td>
                                <td>{entry.year}</td>
                                <td>{entry.genre}</td>
                                <td>{entry.publisher}</td>
                                <td>{entry.northAmericaSales}</td>
                                <td>{entry.europeSales}</td>
                                <td>{entry.japanSales}</td>
                                <td>{entry.otherSales}</td>
                                <td>{entry.globalSales}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayVideoGames;