import { useEffect, useState } from "react";

const SearchBarGenre = (props) => {
    const [searchGenre, setSearchGenre] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchGenre);
        props.filterByName(searchGenre);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchGenre} onChange={(e) => setSearchGenre(e.target.value)} type='text' placeholder='search by Genre...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarGenre;