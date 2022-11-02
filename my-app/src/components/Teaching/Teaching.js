import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeachingCard from "./TeachingCards";
import Particle from "../Particle";
import dsdbt from "../../Assets/Teaching/datascience_and_database_technology.png";
import dsl from "../../Assets/Teaching/datascience_lab.png";

function Teaching() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Educational activities
        </h1>
        <p style={{ color: "white" }}>
        within the <strong className="purple"> DBDMG group </strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={9} className="project-card">
            <TeachingCard
              imgPath={dsl}
              isBlog={false}
              title="Data Science Lab: Process and Methods"
              degree="Master Course"
              role="Teaching assistant for lab practices"
              description="The topics of this course include, but are not limited to, 
              data preprocessing, data exploration, feature engineering and data visualization,
              classification fundamentals and regression analysis, 
              python programming (Numpy, Pandas Matplotlib)."
              demoLink="https://dbdmg.polito.it/dbdmg_web/index.php/2022/09/26/data-science-lab-process-and-methods-2022-23/"
            />
          </Col>

          <Col md={9} className="project-card">
            <TeachingCard
              imgPath={dsdbt}
              isBlog={false}
              title="Data Science And Database Technology"
              degree="Master Course"
              role="Teaching assistant for lab practices"
              description="The topics of this course include, but are not limited to, 
              data warehouse, data lakes, data mining (association rules, classification, clustering), 
              extended SQL, materialized views, query optimization and physical design,
              distributed databases, NoSQL, MongoDB."
              demoLink="https://dbdmg.polito.it/dbdmg_web/index.php/2022/09/27/data-science-e-tecnologie-per-le-basi-di-dati-2022-2023/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Teaching;