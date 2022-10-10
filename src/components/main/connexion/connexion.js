import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./connexion.css";



function Connexion() {
  return (

    <Container>
           <h1>Connexion</h1> 
    <Form className="form">
      <Form.Group className="mb-3  " controlId="email">
        <Form.Label>Adresse e-mail  </Form.Label>
        <Form.Control type="email" placeholder="Entrer votre email" />
       
      </Form.Group>

      <Form.Group className="mb-3 " controlId="password">
        <Form.Label>Mot de passe </Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="remember">
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
