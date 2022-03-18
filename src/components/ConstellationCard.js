import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ConstellationCard({ constellation }) {
    const { id, name, image, phrase, family, about } = constellation;


    return (
        <Card>
                <div className="card">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>"{phrase}"</p>
                    <p><b>Family: </b>{family}</p>
                </div>
        </Card>
    );
}






export default ConstellationCard;