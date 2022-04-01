import React, {useState, useEffect} from 'react';


const DisplayVideoGames = ({matchingGames}) => {

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
                                <td>{entry.name}</td>
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