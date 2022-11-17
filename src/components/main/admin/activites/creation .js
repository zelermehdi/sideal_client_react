// CSS
// Bootstrap Components
import { Container, Button, Form } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

// Components
// React components
import React, { useState } from "react";
// Other librairies
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import Activites from "./activites";

axios.defaults.baseURL = "http://sideal-refonte-api.local/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

function Creation() {
  const [creationInput, setCreationInput] = useState({
    title: "",
    color: "",
    require_approval: "",
    adult_only: "",
    kid_only: "",
    adult_sideal_value: "",
    adult_out_sideal_value: "",
    kid_sideal_value: "",
    kid_out_sideal_value: "",
    day: "",
    type: "",
    starts_at: "",
    ends_at: "",
    error_list: [],
  });
  const handleInput = (e) => {
    setCreationInput({
      ...creationInput,
      [e.target.name]: e.target.value,
    });
  };
  const creationSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://sideal-refonte-api.local/api/create", creationInput)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          console.log("success");
          // localStorage.setItem("auth_token", res.data.token);
          // localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
        } else {
          setCreationInput({
            ...creationInput,
            error_list: res.data.validation_errors,
          });
        }
      });
  };

  return (
    <Container>
      <h3 className="text-center mt-5">Création d'activite</h3>
      <Form
        className=" form w-50 date-calendar mt-2 p-2 creationActivité "
        onSubmit={creationSubmit}
      >
        <Form.Group className="mb-3  " controlId="title">
          <Form.Label>titre </Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleInput}
            value={creationInput.title}
            placeholder="titre"
          />
          <Badge className="bg-white text-danger">
            {creationInput.error_list.title}
          </Badge>
        </Form.Group>
        <Form.Group className="mb-3  " controlId="couleur">
          <Form.Label>couleur </Form.Label>
          <Form.Control
            type="color"
            name="color"
            onChange={handleInput}
            value={creationInput.color}
            placeholder="couleur"
          />
          <Badge className="bg-white text-danger">
            {creationInput.error_list.color}
          </Badge>
        </Form.Group>

        {/* <Form.Group className="mb-3  " controlId="approbation">
          <Form.Label>approbation </Form.Label>
          <Form.Control
            type="number"
            name="require_approval"
            onChange={handleInput}
            value={creationInput.require_approval}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.require_approval}
          name="require_approval"
        >
          <option value="">approbation </option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.require_approval}
          </Badge>
        </Form.Select>

        {/* 
        <Form.Group className="mb-3  " controlId="uniquement adulte">
          <Form.Label>uniquement adulte</Form.Label>
          <Form.Control
            type="number"
            name="adult_only"
            onChange={handleInput}
            value={creationInput.adult_only}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.adult_only}
          name="adult_only"
        >
          <option value=""> uniquement adulte</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.adult_only}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="uniquement enfant">
          <Form.Label>uniquement enfant</Form.Label>
          <Form.Control
            type="number"
            name="kid_only"
            onChange={handleInput}
            value={creationInput.kid_only}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.kid_only}
          name="kid_only"
        >
          <option value=""> uniquement enfant</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.kid_only}
          </Badge>
        </Form.Select>

        {/* 
        <Form.Group className="mb-3  " controlId="adulte sideal">
          <Form.Label>adulte sideal </Form.Label>
          <Form.Control
            type="number"
            name="adult_sideal_value"
            onChange={handleInput}
            value={creationInput.adult_sideal_value}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.adult_sideal_value}
          name="adult_sideal_value"
        >
          <option value=""> adulte sideal</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.adult_sideal_value}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="adulte hors sideal">
          <Form.Label>adulte hors sideal </Form.Label>
          <Form.Control
            type="number "
            name="adult_out_sideal_value"
            onChange={handleInput}
            value={creationInput.adult_out_sideal_value}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.adult_out_sideal_value}
          name="adult_out_sideal_value"
        >
          <option value=""> adulte hors sideal</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.adult_out_sideal_value}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="enfants sideal">
          <Form.Label>enfants sideal</Form.Label>
          <Form.Control
            type="number"
            name="kid_sideal_value"
            onChange={handleInput}
            value={creationInput.kid_sideal_value}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.kid_out_sideal_value}
          name="kid_sideal_value"
        >
          <option value=""> enfants sideal</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.kid_sideal_value}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="enfants hors sideal">
          <Form.Label>enfants hors sideal</Form.Label>
          <Form.Control
            type="number"
            name="kid_out_sideal_value"
            onChange={handleInput}
            value={creationInput.kid_out_sideal_value}
            placeholder="titre"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.kid_out_sideal_value}
          name="kid_out_sideal_value"
        >
          <option value=""> enfants hors sideal</option>
          <option value="0">oui</option>
          <option value="1">non</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.kid_out_sideal_value}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="jour">
          <Form.Label>jour </Form.Label>
          <Form.Control
            type="text"
            name="day"
            onChange={handleInput}
            value={creationInput.day}
            placeholder=" choisir un jour"
          />
        </Form.Group> */}

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.day}
          name="day"
        >
          <option value=""> choix du jour</option>
          <option value="lundi">Lundi</option>
          <option value="Mardi">Mardi</option>
          <option value="Mercredi">Mercredi</option>
          <option value="Jeudi">Jeudi</option>
          <option value="Vendredi">Vendredi</option>
          <option value="Samedi">Samedi</option>
          <option value="Dimanche">Dimanche</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.day}
          </Badge>
        </Form.Select>

        <Form.Select
          className="mb-3"
          onChange={handleInput}
          value={creationInput.type}
          name="type"
        >
          <option value=""> sélectionner un type</option>
          <option value="0">annuel</option>
          <option value="1">non annuel</option>
          <option value="2">ponctuel</option>
          <Badge className="bg-white text-danger">
            {creationInput.error_list.type}
          </Badge>
        </Form.Select>

        {/* <Form.Group className="mb-3  " controlId="type">
          <Form.Label>type </Form.Label>
          <Form.Control
            type="text"
            name="type"
            onChange={handleInput}
            value={creationInput.type}
            placeholder="titre"
          />
        </Form.Group>  */}
        <Form.Group className="mb-3  " controlId="heure de debut">
          <Form.Label>heure du début </Form.Label>
          <Form.Control
            type="time"
            name="starts_at"
            onChange={handleInput}
            value={creationInput.starts_at}
            placeholder="titre"
          />
          <Badge className="bg-white text-danger">
            {creationInput.error_list.starts_at}
          </Badge>
        </Form.Group>
        <Form.Group className="mb-3  " controlId="heure de fin ">
          <Form.Label>heure de fin </Form.Label>
          <Form.Control
            type="time"
            name="ends_at"
            onChange={handleInput}
            value={creationInput.ends_at}
            placeholder="titre"
          />
          <Badge className="bg-white text-danger">
            {creationInput.error_list.ends_at}
          </Badge>
        </Form.Group>
        {/* <Form.Group className="mb-3  " controlId="title">
          <Form.Label>Nom </Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleInput}
            value={creationInput.title}
            placeholder="titre"
          />
        </Form.Group> */}
        <Button className="bouton" type="submit">
          créer
        </Button>
      </Form>
    </Container>
  );
}

export default Creation;
