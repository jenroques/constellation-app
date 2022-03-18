import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ConstellationCard({ constellation, onAddLocation }) {
    const { id, name, image, location, about } = constellation;

    const [newLocation, setNewLocation] = useState(location);
    const [showAbout, setShowAbout] = useState(true);

    function handleClick() {
        setShowAbout((showAbout) => !showAbout);
    }

    function handleAddLocationSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3001/constellations/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ location: newLocation }),
        })
            .then((r) => r.json())
            .then((newLocation) => { onAddLocation(newLocation) })
    }

    return (
        <Card>
            <div onClick={handleClick}>
                <div className="image">
                    <img src={showAbout ? constellation.image : constellation.about} alt={name} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="location">
                    <p>{location}</p>
                    <form onSubmit={handleAddLocationSubmit}>
                        <input
                            type="text"
                            placeholder="Add Location"
                            value={newLocation}
                            onChange={(e) => setNewLocation(parseFloat(e.target.value))}
                        />
                        <button type="submit">Add Location</button>
                    </form>
                </div>
            </div>
        </Card>
    );
}






export default ConstellationCard;