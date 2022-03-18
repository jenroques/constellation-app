import React, { } from "react";

function Search({ searchTerm, onChangeSearch }) {
    function handleChange(e) {
        onChangeSearch(e.target.value);
    }

    return (
        <div className="ui search">
            <div className="searchbar">
            <label htmlFor="search">Search Constellations:</label>
                <input className="prompt" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            </div>
        </div>
    );
}







export default Search;