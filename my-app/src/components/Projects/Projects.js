import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calm from "../../Assets/Projects/calm.png";
// import diabetic from "../../Assets/Projects/diabetic.png";
import emotionrecognition from "../../Assets/Projects/vocalisation.png";
import ρBerTO from "../../Assets/Projects/ρBerTO.png";
import tof from "../../Assets/Projects/tof.png";
import mosquitoes from "../../Assets/Projects/mosquitoes.png";
import icassp1 from "../../Assets/Projects/icassp1.png";
import pace from "../../Assets/Projects/pace.png";
import map from "../../Assets/Projects/map.png";

import { Helmet } from 'react-helmet';


function Projects() {
  return (
    <Container fluid className="project-section">

        <Helmet>
          <title>Alkis Koudounas | My latest projects</title>
          <meta name="description" content="This page describes which are my latest projects, concerning explainable ai for end-to-end spoken language understanding models, speech processing, italian slu dataset, non-verbal emotion recognition, transformer-based audio models, The Sound of AI and the NASA Space Apps Hackathons, ToF Cameras in Space" />
          <meta name="keywords" content="Alkis Koudounas,PhD,Politecnico,Torino,Projects,Audio,Speech,XAI,SLU,Italian,Emotion Recognition,Space,ToF,The Sound of AI,Podcast" />
          <meta name="robots" content="index, follow" />
        </Helmet>

      <Particle />

      <Container>

        <h1 className="project-heading">
          Selected <strong className="purple"> First-Author </strong> <strong className="white"> Publications </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard imgPath={map} isBlog={false} 
              title="ITALIC: An Italian Intent Classification Dataset"
              description='Alkis Koudounas, Moreno La Quatra, Lorenzo Vaiani, Luca Colomba, Giuseppe Attanasio, Eliana Pastor, Luca Cagliero, Elena Baralis'
              conference="Interspeech 2023"
              ghLink="https://github.com/RiTA-nlp/ITALIC"
              demoLink="https://www.isca-speech.org/archive/pdfs/interspeech_2023/koudounas23_interspeech.pdf"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={icassp1} isBlog={false} 
              title="Exploring Subgroup Performance in End-to-End Speech Models"
              description='Alkis Koudounas, Eliana Pastor, Giuseppe Attanasio, Vittorio Mazzia, Manuel Giollo, Thomas Gueudre, Luca Cagliero et al.'
              conference="IEEE ICASSP 2023"
              ghLink="https://github.com/dbdmg/divergence-in-speech-systems"
              demoLink="https://ieeexplore.ieee.org/abstract/document/10095284"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={tof} isBlog={false}
              title="Time-of-Flight Cameras in Space: Pose Estimation with Deep Learning Methodologies"
              description="Alkis Koudounas, Flavio Giobergia, Elena Baralis"
              conference="IEEE AICT 2022"
              ghLink="https://github.com/koudounasalkis/Time-of-Flight-Cameras-in-Space"
              demoLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10013574"/>
          </Col>

        </Row>

        <h1 className="project-heading">
        Selected <strong className="purple"> Co-Author </strong> <strong className="white"> Publications </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard imgPath={mosquitoes} isBlog={false} 
              title="How Much Attention Should We Pay to Mosquitoes?"
              description="Moreno La Quatra, Lorenzo Vaiani, Alkis Koudounas, Luca Cagliero, Paolo Garza, Elena Baralis"
              conference="ACM Multimedia 2022"
              ghLink="https://github.com/koudounasalkis/How-Much-Attention-Should-We-Pay-to-Mosquitoes"
              demoLink="https://dl.acm.org/doi/pdf/10.1145/3503161.3551594"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={emotionrecognition} isBlog={false}
              title="Transformer-Based Non-Verbal Emotion Recognition"
              description="Lorenzo Vaiani, Alkis Koudounas, Moreno La Quatra, Luca Cagliero, Paolo Garza et al."
              conference="Multimodal Sentiment Analysis Workshop, co-located with ACM Multimedia 2022"
              ghLink="https://github.com/koudounasalkis/Transformer-based-Non-Verbal-Emotion-Recognition"
              demoLink="https://dl.acm.org/doi/pdf/10.1145/3551876.3554801"/>
          </Col>

        </Row>

        <h1 className="project-heading">
          Other <strong className="purple">Works </strong>
        </h1>

        {/* <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p> */}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={pace} isBlog={false} 
              title="PACE"
              description="How many times have you been listening to a podcast and you wanted to go back to a specific part, but you don't remember the exact time?
              We present PACE, Podcast AI for Chapters and Episodes, which allows you to search for podcasts at your own pace.
              PACE is a semantic search engine that helps you find the information you need, in a fast and easy way."
              ghLink="https://github.com/ALM-LAB/PACE"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={calm} isBlog={false}
              title="CALM"
              description="Project for the 1st Sound of AI Hackathon. The idea is to align songs with their natural language description such that we can use text, voice or facial expression to search music.
              CALM will have a direct impact on people using streaming service, who can search using multiple modalities, and new releases that may be immediately included in search."
              ghLink="https://github.com/MorenoLaQuatra/CALM"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={ρBerTO} isBlog={false} 
              title="ρBerTO"
              description='Solution for the NASA Space Apps Challenge, titled "Save the Earth from another Carrington Event". 
              The project describes an innovative approach for tackling the problem of the prediction of symptoms related to possible Carrington Events, leveraging a powerful state-of-the-art transformer-based architecture.'
              ghLink="https://github.com/koudounasalkis/NASA_Space_Apps_Challenge"/>
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard imgPath={diabetic} isBlog={false}
              title="Diabetic Retinopathy Scoring"
              description="Master Degree project focused on training a Generative Adversarial Network (GAN) to perform semi-supervised scoring (in a scale from 0 - no DR - to 4 - Proliferative DR -) of Diabetic Retinopathy
              from high-resolution images taken under a variety of conditions, collected in the Diabetic Retinopathy Detection Dataset."
              ghLink="https://github.com/koudounasalkis/Diabetic-Retinopathy-Scoring-Using-GANs"/>
          </Col> */}

        </Row>

      </Container>
      
    </Container>
  );
}

export default Projects;
