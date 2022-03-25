import React, { useEffect, useState } from "react";
import ConstellationList from "./ConstellationList";
import Search from "./Search";
import NewConstellationForm from "./NewConstellationForm";
import { Container } from "semantic-ui-react";

function ConstellationPage() {
    const [constellations, setConstellations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetch("http://localhost:3001/constellations")
            .then((r) => r.json())
            .then(setConstellations)
    }, []);

    function handleAddConstellation(newConstellation) {
        const updatedConstellationArray = [...constellations, newConstellation];
        setConstellations(updatedConstellationArray);
    }


    const constellationsToDisplay = constellations.filter((constellation) => {
       return constellation.name.toLowerCase().includes(searchTerm.toLowerCase()) }
    );
    

    return (
        
        <Container>
            
            <h3></h3>
            <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <br />
            <ConstellationList constellations={constellationsToDisplay} />
            <NewConstellationForm onAddConstellation={handleAddConstellation}/>
        </Container>
    );
}



export default ConstellationPage;

// input field - button - setState - handleLikes