import React from "react";
import ConstellationCard from "./ConstellationCard";

function ConstellationCard({ constellations }) {
    return (
        <ul className="cards">
            {constellations.map((constellation) => {
                return (
                    <ConstellationCard
                        key={constellations.id}
                        constellation={constellation}
                    />
                );
            })}
        </ul>
    );
}







export default ConstellationList;