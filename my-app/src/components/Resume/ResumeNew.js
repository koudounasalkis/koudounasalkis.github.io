import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Alkis_Koudounas_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { Helmet } from 'react-helmet';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/koudounasalkis/koudounasalkis.github.io/a70f1030daf763c635e66dad4cde0f96a334145e/my-app/src/Assets/Alkis_Koudounas_CV.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
        <Helmet>
          <title>Alkis Koudounas | My resume</title>
          <meta name="description" content="This page contains my resume, with my education, my work experience, a little bit about me, the course I teach, my skills and my previous experiences." />
          <meta name="keywords" content="Alkis Koudounas,PhD,Politecnico,Torino,Projects,Audio,Emotion Recognition,Space,ToF,The Sound of AI" />
          <meta name="robots" content="index, follow" />
        </Helmet>

      <Container fluid className="resume-section">

        <Particle />

        <h1 className="project-heading">
          My <strong className="purple">Resume </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
