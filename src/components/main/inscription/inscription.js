import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Inscription() {
  return (
    <Container>
        <h1>Formulaire d'inscription</h1>
      <Form className="form">
        <Form.Group className="mb-3  " controlId="surname">
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" placeholder="Nom de famille" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="name">
          <Form.Label>Prénom </Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="birthdate">
          <Form.Label>Date de naissance </Form.Label>
          <Form.Control type="date" placeholder="Date de naissance" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="email">
          <Form.Label>Adresse e-mail </Form.Label>
          <Form.Control type="email" placeholder="Entrer votre email" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password-confirm">
          <Form.Label>Confirmer le mot de passe </Form.Label>
          <Form.Control type="password" placeholder="veuillez confirmer votre mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="phone">
          <Form.Label>Téléphone </Form.Label>
          <Form.Control type="tel" placeholder="Entrer votre numéro de téléphone" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="adresse">
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre adresse" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="cp">
          <Form.Label>Code postal</Form.Label>
          <Form.Control type="number" placeholder="Entrer votre code postal" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="city">
          <Form.Label>Ville</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre ville de résidence " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkregister">
          <Form.Check
            type="checkbox"
            label=" Je certifie avoir un certificat médical"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Connexion
        </Button>
      </Form>
    </Container>
  );
}

export default Inscription;
