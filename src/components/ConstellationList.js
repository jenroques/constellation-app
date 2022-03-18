import React from "react";
import ConstellationCard from "./ConstellationCard";

function ConstellationList({ constellations, onAddLocation }) {
    return (
        <ul className="cards">
            {constellations.map((constellation) => {
                return (
                    <ConstellationCard
                        key={constellations.id}
                        constellation={constellation}
                        onAddLocation={onAddLocation}
                    />
                );
            })}
        </ul>
    );
}







export default ConstellationList;