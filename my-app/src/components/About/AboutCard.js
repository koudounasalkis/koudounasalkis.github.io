import React from "react";
import Card from "react-bootstrap/Card";
import { ImMusic } from "react-icons/im";
import { MdTravelExplore, MdSportsMma } from "react-icons/md";
import { GiChessKing } from "react-icons/gi";



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
            Apart from <span className="purple"> (trying to) </span>coding, I also love 
          </p>
          <ul>
            <li className="about-activity">
              <ImMusic /> Listening to music
            </li>
            <li className="about-activity">
              <MdTravelExplore /> Travelling and taking photos
            </li>
            <li className="about-activity">
              <GiChessKing /> Playing Chess
            </li>
            <li className="about-activity">
              <MdSportsMma /> Martial Arts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ad Astra per Aspera"{" "}
          </p>
          {/* <footer className="blockquote-footer">Alkis Koudounas</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
