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
            })
        })
            .then((r) => r.json())
            .then((newLocation) => onAddLocation(newLocation));
    }

    return (
        <div className="new-location">
            <h2>Location </h2>
        </div>
    )

}




export default LocationLog;