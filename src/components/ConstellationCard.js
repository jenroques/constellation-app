import { render } from "@testing-library/react";
import React, { useState }  from "react";
import { Card } from "semantic-ui-react";
import ViewRating from './ViewRating';




function ConstellationCard({ constellation }) {
    const { id, name, image, phrase, family, about } = constellation;
    const [seen, setSeen] = useState(false);

    function handleClick() {
       (setSeen((seen) => !seen)); 
    }


    return (
        <Card>
                <div className="card">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>"{phrase}"</p>
                    <p><b>Family: </b>{family}</p>
                    <button onClick={handleClick}> {seen ? "Seen" : "Unseen"} 
                    </button>
                    <p></p>
                    <ViewRating />
                    <button onClick={() => {
                        window.alert(`${about}`)
                    }}>Notes</button>
                    
                    
                </div>
        </Card>
    );
}




export default ConstellationCard;




