import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alkis Koudounas </span>
            from Italy. 
            <br />I am a Ph.D. student at <span className="purple"> Politecnico di Torino, </span> 
            <br /> working on a joint project with <span className="purple">  Amazon Alexa AI. </span> 
            <br />
            <br />
            Apart from <span className="purple"> (trying to) </span>coding, I also love to 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and taking photos
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ad Astra per Aspera"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
