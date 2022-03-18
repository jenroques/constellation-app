import React, { useEffect, useState } from "react";
import ConstellationList from "./ConstellationList";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function ConstellationPage() {
    const [constellations, setConstellations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/constellations")
            .then((r) => r.json())
            .then(setConstellations)
    }, []);

    const constellationsToDisplay = constellations.filter((constellation) =>
        constellation.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <h1>Constellations</h1>
            <br />
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <br />
            <ConstellationList constellations={constellationsToDisplay} />
        </Container>
    );
}



export default ConstellationPage;