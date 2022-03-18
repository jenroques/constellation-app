import React, { useState } from "react";

function LocationLog({ onAddLocation }) {
    const [location, setLocation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/constellations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location: location,
            }),
        })
            .then((r) => r.json())
            .then((newLocation) => onAddLocation(newLocation));
    }

    return (
        <div className="new-location">
            <h2>Location Constellation Seen</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Location Log"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Add Location</button>
            </form>
        </div>
    );
}




export default LocationLog;