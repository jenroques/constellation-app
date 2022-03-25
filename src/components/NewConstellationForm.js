import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function NewConstellationForm({ onAddConstellation }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phrase, setPhrase] = useState("");
    const [family, setFamily] = useState("");
    const [about, setAbout] = useState("");
    
   

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/constellations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                phrase: phrase,
                image: image,
                family: family,
                about: about,
            }),
        })
            .then((r) => r.json())
            .then((newConstellation) => onAddConstellation(newConstellation));
    }

    const clearValues = () => {
        setName("");
        setPhrase("");
        setImage("");
        setFamily("");
        setAbout("");
    }


    return (
        <div className="new-constellation-form">
            <h2>Have you discovered a new constellation? Submit your findings below!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Constellation Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text" 
                    name="phrase"
                    placeholder="Phrase"
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                />
                <input  
                    type="text" 
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input 
                    type="text"
                    name="family"
                    placeholder="Family"
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                />
                <input 
                    type="text"
                    name="about"
                    placeholder="Notes"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                <button type="submit">Add Constellation</button> <br></br>
            </form>
            <button className="reset" onClick={clearValues}> Reset </button> 
        </div>
    );
}



export default NewConstellationForm;