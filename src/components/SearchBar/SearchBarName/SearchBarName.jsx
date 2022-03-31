import { useEffect, useState } from "react";

const SearchBarName = (props) => {
    const [searchName, setSearchName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchName);
        props.filterByName(searchName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchName} onChange={(e) => setSearchName(e.target.value)} type='text' placeholder='search by Name...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarName;