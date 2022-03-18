import { render } from "@testing-library/react";
import React  from "react";
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
                    <button onClick={() => {
                        window.alert(`${about}`)
                    }}>Notes</button>
                    
                    <hr></hr>
                </div>
        </Card>
    );
}






export default ConstellationCard;