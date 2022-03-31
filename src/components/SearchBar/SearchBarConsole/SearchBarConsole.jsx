import { useEffect, useState } from "react";

const SearchBarConsole = (props) => {
    const [searchConsole, setSearchConsole] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchConsole);
        props.filterByConsole(searchConsole);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchConsole} onChange={(e) => setSearchConsole(e.target.value)} type='text' placeholder='search by Console...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarConsole;