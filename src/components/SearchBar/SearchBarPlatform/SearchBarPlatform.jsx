import { useEffect, useState } from "react";

const SearchBarPlatform = (props) => {
    const [searchPlatform, setSearchPlatform] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchPlatform);
        props.filterByPlatform(searchPlatform);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchPlatform} onChange={(e) => setSearchPlatform(e.target.value)} type='text' placeholder='search by Platform...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarPlatform;