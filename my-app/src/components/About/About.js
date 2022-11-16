import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about1.png";
import Toolstack from "./Toolstack";

import { Helmet } from 'react-helmet';

function About() {
  return (
      <Container fluid className="about-section">
        
        <Helmet>
          <title>Alkis Koudounas | A little bit about me</title>
          <meta name="description" content="This page describes a little bit who I am, what I do for living nd what I love to do as hobbies." />
          <meta name="keywords" content="Alkis Koudounas,PhD,Politecnico,Torino,Amazon Alexa,About me,Technical skills,Portfolio" />
          <meta name="author" content="Alkis Koudounas" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Particle />

        <Container>
          
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="alkis koudounas about me" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Adobe</strong> Suite
          </h1>
          <Toolstack />

          <Github />

        </Container>

      </Container>
  );
}

export default About;
