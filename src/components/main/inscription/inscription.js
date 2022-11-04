// CSS
import "./inscription.css";
// Bootstrap Components
import { Container, Button, Form } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

// Components
import image from "./sideal.png";
// React components
import React, { useState } from "react";
// Other librairies
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import swal from "sweetalert";

axios.defaults.baseURL = "http://sideal-refonte-api.local/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

function Inscription() {
  const [inscriptionInput, setInscriptionInput] = useState({
    first_name: "",
    last_name: "",
    birthdate: "",
    phone: "",
    adresse: "",
    city: "",
    code_postal: "",
    email: "",
    password: "",
    confirm_password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    setInscriptionInput({
      ...inscriptionInput,
      [e.target.name]: e.target.value,
    });
  };

  const inscriptionSubmit = (e) => {
    e.preventDefault();
    console.log(inscriptionInput);
    axios
      .post("http://sideal-refonte-api.local/register", inscriptionInput)
      .then((res) => {
        if (res.data.status === 200) {
          console.log("success");
          // localStorage.setItem("auth_token", res.data.token);
          // localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
        } else {
          setInscriptionInput({
            ...inscriptionInput,
            error_list: res.data.validation_errors,
          });
        }
      });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <img id="logo" src={image} alt="logo du sideal" className="w-25" />
      </div>

      <h3 className="text-center mt-5">Formulaire d'inscription</h3>
      <Form className="form" onSubmit={inscriptionSubmit}>
        <Form.Group className="mb-3  " controlId="surname">
          <Form.Label>Nom </Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            onChange={handleInput}
            value={inscriptionInput.first_name}
            placeholder="Nom de famille"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.first_name}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="name">
          <Form.Label>Prénom </Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            onChange={handleInput}
            value={inscriptionInput.last_name}
            placeholder="Prénom"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.last_name}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="birthdate">
          <Form.Label>Date de naissance </Form.Label>
          <Form.Control
            type="date"
            name="birthdate"
            onChange={handleInput}
            value={inscriptionInput.birthdate}
            placeholder="Date de naissance"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.birthdate}
          </Badge>
        </Form.Group>
        <Form.Group className="mb-3  " controlId="email">
          <Form.Label>Adresse e-mail </Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleInput}
            value={inscriptionInput.email}
            placeholder="Entrer votre email"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.email}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleInput}
            value={inscriptionInput.password}
            placeholder="doit comporter au moins 8 caractères."
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.password}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password-confirm">
          <Form.Label>Confirmer le mot de passe </Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            onChange={handleInput}
            value={inscriptionInput.confirm_password}
            placeholder="veuillez confirmer votre mot de passe"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.confirm_password}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="phone">
          <Form.Label>Téléphone </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            onChange={handleInput}
            value={inscriptionInput.phone}
            placeholder="Entrer votre numéro de téléphone"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.phone}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3  " controlId="adresse">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            name="adresse"
            onChange={handleInput}
            value={inscriptionInput.adresse}
            placeholder="Entrer votre adresse"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.adresse}
          </Badge>
        </Form.Group>
        <Form.Group className="mb-3  " controlId="cp">
          <Form.Label>Code postal</Form.Label>
          <Form.Control
            type="text"
            name="code_postal"
            onChange={handleInput}
            value={inscriptionInput.code_postal}
            placeholder="Entrer votre code postal"
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.code_postal}
          </Badge>
        </Form.Group>
        <Form.Group className="mb-3  " controlId="city">
          <Form.Label>Ville</Form.Label>
          <Form.Control
            type="text"
            name="city"
            onChange={handleInput}
            value={inscriptionInput.city}
            placeholder="Entrer votre ville de résidence "
          />
          <Badge className="bg-white text-danger">
            {inscriptionInput.error_list.city}
          </Badge>
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkregister">
          <Form.Check
            type="checkbox"
            label=" Je certifie avoir un certificat médical"
          />
        </Form.Group>
        <Button className="bouton" type="submit">
          S'inscrire
        </Button>
        <div className="mt-3">
          <LinkContainer to="/">
            <a href="" className="mainTextColor">
              se connecter
            </a>
          </LinkContainer>
        </div>
      </Form>
    </Container>
  );
}

export default Inscription;
