import SectionMessage from "components/general/sectionMessage/SectionMessage";
import stockData from "components/general/json/message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React, { useState, useEffect } from "react";

function HomeAdmin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://sideal-refonte-api.local/api/plateformlogs`)
      .then((res) => {
        const messages = res.data;
        setMessages(messages);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-5 mt-2">Accueil Administateur</h2>

      <Row>
        <Col xs="12" md="6">
          <SectionMessage title="Notifications" messages={messages} />
        </Col>
        <Col xs="12" md="6">
          <SectionMessage title="Messages" messages={messages} />
        </Col>
      </Row>
    </div>
  );
}
export default HomeAdmin;
