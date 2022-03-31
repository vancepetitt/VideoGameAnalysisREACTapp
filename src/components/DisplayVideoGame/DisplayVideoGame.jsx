import React, {useState, useEffect} from 'react';

const DisplayVideoGames = (props) => {


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
                        <th>North America Sales</th>
                        <th>Europe Sales</th>
                        <th>Japan Sales</th>
                        <th>Other Sales</th>
                        <th>Global Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {props.matchingGames.map((entry) => {
                        return(
                            <tr>
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