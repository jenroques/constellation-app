import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ConstellationCard({ constellation, onAddLocation }) {
    const { id, name, image, location, about } = constellation;


    return (
        <Card>
                <div className="image">
                    <img src={image}></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
            
        </Card>
    );
}






export default ConstellationCard;