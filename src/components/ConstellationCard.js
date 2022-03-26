import { render } from "@testing-library/react";
import React  from "react";
import { Card } from "semantic-ui-react";
import ViewRating from './ViewRating';



function ConstellationCard({ constellation }) {
    const { id, name, image, phrase, family, about } = constellation;
    

    return (
        <Card>
                <div className="card">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>"{phrase}"</p>
                    <p><b>Family: </b>{family}</p>
                    <ViewRating />
                    <button onClick={() => {
                        window.alert(`${about}`)
                    }}>Notes</button>
                    
                    
                </div>
        </Card>
    );
}






export default ConstellationCard;




