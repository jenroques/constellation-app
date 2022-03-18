import React, { useEffect, useState } from "react";
import LocationLog from "./LocationLog";
import ConstellationList from "./ConstellationList";
import Search from "./Search";

function ConstellationPage() {
    const [constellations, setConstellations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/constellations")
            .then((r) => r.json())
            .then((constellationArray) => {
                setConstellations(constellationArray);
            });
    }, []);


    const displayedConstellations = constellations.filter((constellation) => {
        return constellation.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <main>
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ConstellationList
                constellations={displayedConstellations}
            />
        </main>
    );
}





export default ConstellationPage;