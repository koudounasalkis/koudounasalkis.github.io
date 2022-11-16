import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calm from "../../Assets/Projects/calm.png";
import diabetic from "../../Assets/Projects/diabetic.png";
import emotionrecognition from "../../Assets/Projects/vocalisation.png";
import ρBerTO from "../../Assets/Projects/ρBerTO.png";
import tof from "../../Assets/Projects/tof.png";
import mosquitoes from "../../Assets/Projects/mosquitoes.png";

import { Helmet } from 'react-helmet';


function Projects() {
  return (
    <Container fluid className="project-section">

        <Helmet>
          <title>Alkis Koudounas | My latest projects</title>
          <meta name="description" content="This page describes which are my latest projects, concerning non-verbal emotion recognition, transformer-based audio models, The Sound of AI and the NASA Space Apps Hackathons, ToF Cameras in Space" />
          <meta name="keywords" content="Alkis Koudounas,PhD,Politecnico,Torino,Projects,Audio,Emotion Recognition,Space,ToF,The Sound of AI" />
          <meta name="robots" content="index, follow" />
        </Helmet>

      <Particle />

      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={ρBerTO} isBlog={false} 
              title="ρBerTO"
              description='Solution for the NASA Space Apps Challenge, titled "Save the Earth from another Carrington Event". 
              The project describes an innovative approach for tackling the problem of the prediction of symptoms related to possible Carrington Events, leveraging a powerful Deep Learning Architecture.'
              ghLink="https://github.com/koudounasalkis/NASA_Space_Apps_Challenge"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={mosquitoes} isBlog={false} 
              title="How Much Attention Should We Pay to Mosquitoes?"
              description="Mosquitoes are a major global health problem, thus monitoring is helpful in preventing the outbreak of many diseases. In this paper, we propose a novel data-driven approach 
              that leverages Transformer-based models to identify mosquitoes in audio recordings."
              ghLink="https://github.com/koudounasalkis/How-Much-Attention-Should-We-Pay-to-Mosquitoes"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={emotionrecognition} isBlog={false}
              title="Transformer-Based Non-Verbal Emotion Recognition"
              description="Recognizing emotions in non-verbal audio requires a deep understanding of their underlying features. In this paper, we use a Transformer architecture trained on contrastive audio examples,
              leveraging augmented data to learn robust non-verbal emotion classifiers."
              ghLink="https://github.com/koudounasalkis/Transformer-based-Non-Verbal-Emotion-Recognition"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={calm} isBlog={false}
              title="CALM"
              description="Project for the 1st Sound of AI Hackathon. The idea is to align songs with their natural language description such that we can use text, voice or facial expression to search music.
              CALM will have a direct impact on people using streaming service, who can search using multiple modalities, and new releases that may be immediately included in search."
              ghLink="https://github.com/MorenoLaQuatra/CALM"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={tof} isBlog={false}
              title="ToF Cameras in Space"
              description="Research focused on the development of a NN-based approach for Object Detection and 6 DoF Pose Estimation with ToF Cameras for space applications. 
              The aim is that of designing a NN-based approach able to detect a part of a satellite (such as a gripping interface) and estimate its 6 DoF pose to support on-orbit servicing missions."
              ghLink="https://github.com/koudounasalkis/Time-of-Flight-Cameras-in-Space"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={diabetic} isBlog={false}
              title="Diabetic Retinopathy Scoring"
              description="Master Degree project focused on training a Generative Adversarial Network (GAN) to perform semi-supervised scoring (in a scale from 0 - no DR - to 4 - Proliferative DR -) of Diabetic Retinopathy
              from high-resolution images taken under a variety of conditions, collected in the Diabetic Retinopathy Detection Dataset."
              ghLink="https://github.com/koudounasalkis/Diabetic-Retinopathy-Scoring-Using-GANs"/>
          </Col>

        </Row>

      </Container>
      
    </Container>
  );
}

export default Projects;
