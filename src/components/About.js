import React, { useEffect, useState } from "react";
import "semantic-ui-react"

function About() {
  const [details, setDetails] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/constellations/about")
        .then((r) => r.json())
        .then(setDetails)
  }, []);

  function detailsPopup() {
    window.alert(details)
  }

}

export default About;