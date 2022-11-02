import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function TeachingCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <h3 className="font-weight-bold purple">{props.title}</h3>
        <h4>{props.degree}</h4>
        <h5>{props.role}</h5>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Official website of the Course"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default TeachingCards;
