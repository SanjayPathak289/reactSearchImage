import React, { useState } from 'react';
import SearchRes from './SearchRes';

const Search = () => {
    const [input, setInput] = useState("");
    const inputEvent = (event) => {
        setInput(event.target.value);
    }
    return (
        <>
            <div className='searchBar'>
                <input type='text' placeholder='Search Anything' onChange={inputEvent} value={input} />
            </div>
            {input !== "" ? <SearchRes name={input}/> : null}
        </>
    )
}
export default Search;

