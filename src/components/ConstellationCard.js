import React, { useState } from "react";

function ConstellationCard({ constellation, onAddLocation }) {
    const { id, name, image, location } = constellation;
    
    const [newLocation, setNewLocation] = useState(location);

    function handleAddLocationSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3001/constellations/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            body: JSON.stringify({ location: newLocation }),
        })
            .then((r) => r.json())
            .then((newLocation) => {onAddLocation(newLocation)})
    }

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
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
        </li>
    );
}






export default ConstellationCard;