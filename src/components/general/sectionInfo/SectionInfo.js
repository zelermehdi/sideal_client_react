import Badge from "react-bootstrap/Badge";
import React from "react";
import "./SectionInfo.css";
import stockData from "components/general/json/message";
import { Container } from "react-bootstrap";

function SectionInfo() {
  var d = new Date();
  var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var fullDate = date + " " + hours;

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
          {stockData.map((Info) => {
            return (
              <p>
                {fullDate} <Badge bg="success">{Info.type}</Badge>
                <br></br>
                {Info.message}
              </p>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default SectionInfo;
