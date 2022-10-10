import SectionMessage from "components/general/sectionMessage/SectionMessage";
import stockData from "components/general/json/message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeAdmin() {
  return (
    <div>
            <h2>Accueil Administateur</h2>

  <Row>
        <Col xs="12" md="6">
          <SectionMessage title="Notifications" messages={stockData} /></Col>
        <Col xs="12" md="6">
          <SectionMessage title="Messages" messages={stockData} />
        </Col>
      </Row>      
      </div>
  );
}
export default HomeAdmin;
