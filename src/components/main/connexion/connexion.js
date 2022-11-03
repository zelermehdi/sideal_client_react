// CSS
import "./connexion.css";
// Bootstrap Components
import { Container, Button, Form } from "react-bootstrap";
import image from "./sideal.png";
// React components
import React, { useState, useContext } from "react";
// Other librairies
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import swal from "sweetalert";

axios.defaults.baseURL = "http://sideal-refonte-api.local/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function Connexion(props) {
  // connectionInput corresponding to the value of email password in the form
  const [connexionInput, setConnexionInput] = useState({
    email: "",
    password: "",
  });

  // push the values ​​entered in the form into the variable connectioninput
  const handleInput = (e) => {
    setConnexionInput({ ...connexionInput, [e.target.name]: e.target.value });
  };

  // when we click on the submit button, an axios request is sent, if the match is ok, we update the data to the parent element
  const connexionSubmit = (e) => {
    e.preventDefault();
    axios.post("http://sideal-refonte-api.local/login", connexionInput).then((res) => {
      if (res.data.status === 200) {
        props.updateUser(res.data);
      } 
      else {
        swal("Warning", res.data.message, "warning");
      }
    });
  };
  
  // Show the connexion form
  return (
    <Container id="connexion">
      <div className="d-flex justify-content-center">
        <img id="logo" src={image} alt="logo du sideal" className="w-25" />
      </div>
      <h3 className="text-center mt-5">Connexion</h3>
      <Form className="form" onSubmit={connexionSubmit}>

        <Form.Group className="mb-3  " controlId="email">
          <Form.Label>Adresse e-mail </Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleInput}
            value={connexionInput.email}
            placeholder="Entrer votre email"
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="password">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleInput}
            value={connexionInput.password}
            placeholder="Mot de passe"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="remember">
          <Form.Check type="checkbox" label=" se souvenir de moi" />
        </Form.Group>

        <Button className="mainBgColor" type="submit">
          Connexion
        </Button>
        <div className="mt-3">
          <LinkContainer to="inscription">
            <a href="" className="mainTextColor">
              S’inscrire
            </a>
          </LinkContainer>
        </div>
      </Form>
    </Container>
  );
}

export default Connexion;
