import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionMessage from "../../../general/sectionMessage/SectionMessage";
import "./Home.css";
import axios from 'axios';
import React, { useState , useEffect} from 'react';





import Calendrier from "components/main/calendrier/Calendrier";

// displays messages that are in the messages section

function Home() {
  // Envoyer une requête HTTP pour récupérer les logs de l'API
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    axios.get(`http://sideal-refonte-api.local/api/plateformlogs`)
      .then(res => {
        const messages = res.data;
        setMessages( messages );
      })
  }, []);

  return (
    <div>
      <h2>Accueil utilisateur</h2>
      <Row>
        <Col xs="12" md="6">
          <SectionMessage title="Notifications" messages={messages} /></Col>
        <Col xs="12" md="6">
          <SectionMessage title="Messages" messages={messages} />
        </Col>
        <Col xs='12'>
          <Calendrier />
        </Col>
      </Row> 
    </div>
   
  );
}

export default Home;
