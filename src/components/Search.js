import React, { } from "react";

function Search({handleSearch}) {

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Constellations:</label>
            <input 
                type="text"
                id="search"
                placeholder="Type name to search..."
                onChange={handleSearch}
            />
        </div>
    );
}





export default Search;