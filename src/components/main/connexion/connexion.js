import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./connexion.css";
import image from "./sideal.png";
import react, {useState} from 'react';
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';


function Connexion(props) {


  const [connexionInput, setConnexionInput ] = useState({
    email:  '',
    password: '',
  });

   const handleInput = (e)=>{
    setConnexionInput({...connexionInput, [e.target.name] : e.target.value}) ;
   }

  const connexionSubmit = (e)=>{
    e.preventDefault();
    console.log (connexionInput)


axios.post('localhost:3000/api', connexionInput).then((response)=>{
    
});
  }

  return (
    <Container id="connexion">
      <div className="d-flex justify-content-center">
          <img id="logo" src={image} alt="logo du sideal" className="w-25"/>
      </div>
      <h3 className="text-center mt-5">Connexion</h3>
      <Form className="form" onSubmit={connexionSubmit}>
        <Form.Group className="mb-3  " controlId="email">
          <Form.Label>Adresse e-mail </Form.Label>
          <Form.Control type="email"  name ="email" onChange ={handleInput} value={connexionInput.email} placeholder="Entrer votre email" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="password">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control type="password" name='password' onChange={handleInput} value={connexionInput.password} placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="remember">
          <Form.Check type="checkbox" label=" se souvenir de moi" />
        </Form.Group>
        <Button className="mainBgColor" type="submit">
          Connexion
        </Button>
        <div className="mt-3">
          <LinkContainer to="inscription">
            <a href="" className="mainTextColor">S’inscrire</a>
          </LinkContainer>
        </div>
      </Form>
    </Container>
  );
}

export default Connexion;
