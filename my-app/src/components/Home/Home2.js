import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/profile1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">

      <Container>

        <Row>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Let me <span className="purple"> Introduce </span> Myself</h1>
            
            <p className="home-about-body">
              I am a 
              <i>
                <b className="purple"> half Greek-half Italian </b>
                <a href="https://www.dauin.polito.it/it/personale/scheda/(nominativo)/alkis.koudounas">Ph.D. student</a> 
              </i>
              , deeply astonished by the mystic 
              <i>
                <b className="purple"> AI kingdom </b>
              </i>
              we are living. 
              My current research topics are in the field of 
              <i>
                <b className="purple"> NLP and Audio Processing. </b>
              </i>
          
              <br />
              <br /> 
              I treasure listening to 
              <i>
                <b className="purple"> music </b>
              </i>
              , 
              <i>
                <b className="purple"> travelling </b>
              </i>
              and taking
              <i>
                <b className="purple"> night-ish photos. </b>
              </i>

              <br />
              <br />
              I do relish 
              <i>
                <b className="purple"> space </b> 
              </i>
              and the immensity that surrounds it.
            </p>

          </Col>

          <Col md={4} className="myAvtar">
            <Tilt><img src={myImg} className="img-fluid" alt="alkis koudounas homepage avatar" /></Tilt>
          </Col>
          
        </Row>

        <Row>

          <Col md={12} className="home-about-social">

            <p>Feel free to <span className="purple">connect </span>with me!</p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a href="https://github.com/koudounasalkis" target="_blank" rel="noreferrer" 
                  className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://twitter.com/AlkisKoudounas" target="_blank" rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.linkedin.com/in/alkis-koudounas/" target="_blank" rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.instagram.com/alkis_koudounas/" target="_blank" rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>

            </ul>

          </Col>
          
        </Row>

      </Container>

    </Container>
  );
}
export default Home2;
