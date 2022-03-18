import React from "react";
import ConstellationCard from "./ConstellationCard";
import { Card } from "semantic-ui-react";

function ConstellationList({ constellations, onAddLocation }) {
    const cards = constellations.map((constellation) => (
        <ConstellationCard key={constellation.id} constellation={constellation} onAddLocation={onAddLocation} />
    ));

    return <Card.Group itemsPerRow={8}>{cards}</Card.Group>
}







export default ConstellationList;