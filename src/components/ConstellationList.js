import React from "react";
import ConstellationCard from "./ConstellationCard";
import { Card } from "semantic-ui-react";

function ConstellationList({ constellations }) {
    const cards = constellations.map((constellation) => (
        <ConstellationCard key={constellation.id} constellation={constellation}  />
    ));

    return <Card.Group itemsPerRow={6}>{cards}</Card.Group>
}







export default ConstellationList;