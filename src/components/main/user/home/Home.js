import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionMessage from "../../../general/sectionMessage/SectionMessage";
import stockData from "components/general/json/message";
import "./Home.css";
import Calendrier from "components/main/calendrier/Calendrier";

function Home() {
  return (
    <div>
      <h2>Accueil utilisateur</h2>
      <Row>
        <Col xs="12" md="6">
          <SectionMessage title="Notifications" messages={stockData} /></Col>
        <Col xs="12" md="6">
          <SectionMessage title="Messages" messages={stockData} />
        </Col>
        <Col xs='12'>
          <Calendrier />
        </Col>
      </Row> 
    </div>
   
  );
}
export default Home;
