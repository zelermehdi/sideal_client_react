import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./connexion.css";



function Connexion() {
  return (
    <Container
      style={{
        width: "50%"}}>
    <Form className="form">
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Label>Adresse e-mail  </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Mot de passe </Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label=" se souvenir de moi" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Connexion
      </Button>
    </Form>
    </Container>
  );
}

export default Connexion;