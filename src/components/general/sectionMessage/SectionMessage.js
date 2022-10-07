import Badge from "react-bootstrap/Badge";
import React from "react";
import "./SectionMessage.css";
import { Container } from "react-bootstrap";

import thomas from "components/general/json/json-message";


function SectionMessage() {
  return (
    <Container
      style={{
        position: "relative",
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
            Date() <Badge bg="success">messages</Badge>
          </p>
          <p>vous avez un message</p>
        </div>
      </div>
    </Container>
  );
}

export default SectionMessage;
