import Badge from "react-bootstrap/Badge";
import React from "react";
import "./SectionDemande.css";
import { Container } from "react-bootstrap";

function SectionDemande() {
  return (
    <Container
      style={{
        "margin-top": "50px",
        background: "#EEF3F9",
        height: "250px",
        width: "500px",
      }}
    >
      <div id="div_parent">
        <div id="page">
          <p className="">
            {" "}
            {Date()} <Badge bg="success">messages</Badge>
          </p>
          <p>vous avez une demande</p>
        </div>
      </div>
    </Container>
  );
}

export default SectionDemande;
