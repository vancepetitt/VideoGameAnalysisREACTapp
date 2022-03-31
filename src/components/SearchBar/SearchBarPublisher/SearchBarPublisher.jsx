import { useEffect, useState } from "react";

const SearchBarPublisher = (props) => {
    const [searchPublisher, setSearchPublisher] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchPublisher);
        props.filterByPublisher(searchPublisher);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchPublisher} onChange={(e) => setSearchPublisher(e.target.value)} type='text' placeholder='search by Publisher...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )

}

export default SearchBarPublisher;