import React, { useState } from "react";

function ConstellationCard({ constellation }) {
    const { id, name, image, location } = constellation;

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{location}</p>
        </li>
    );
}






export default ConstellationCard;