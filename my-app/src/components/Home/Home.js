import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { Helmet } from 'react-helmet';


function Home() {
  return (
    <section>

        <Helmet>
          <title>Alkis Koudounas | Homepage</title>
          <meta name="description" content="I am Alkis Koudounas, PhD Student @ Politecnico di Torino, TA in Data Science. My research focuses on Speech & Audio Processing, NLP and XAI." />
          <meta name="keywords" content="Alkis Koudounas,Alkis,Koudounas,PhD,Politecnico,Torino,AI,Data Science,Deep Learning,Speech Processing,Audio,NLP" />
          <meta name="robots" content="index, follow" />
        </Helmet>

      <Container fluid className="home-section" id="home">

        <Particle />

        <Container className="home-content">
          
          <Row>

            <Col md={7} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span>
              </h1>

              <h1 className="heading-name">
                I am <strong className="main-name"> Alkis Koudounas</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}> <Type /> </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="alkis koudounas homepage" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>

          </Row>

        </Container>

      </Container>

      <Home2 />
      
    </section>
  );
}

export default Home;
