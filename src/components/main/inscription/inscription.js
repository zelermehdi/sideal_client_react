import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inscription.css";
import image from  "./sideal.png";
import { LinkContainer } from "react-router-bootstrap";
import react, {useState} from 'react';
import axios from 'axios';




function Inscription() {


  const [inscriptionInput, setInscriptionInput ] = useState({
  first_name:'',
    last_name: '',
    birthdate:'',
    phone:'',
    adresse:'',
    city:'',
    code_postal:'',
    email:  '',
    password: '',
  });

   const handleInput = (e)=>{
    setInscriptionInput({...inscriptionInput, [e.target.name] : e.target.value}) ;
   }



   
  const connexionSubmit = (e)=>{
    e.preventDefault();
    
    
      axios.post('http://sideal-refonte-api.local/register', inscriptionInput).then((response)=>{
       
      });
    
   console.log(inscriptionInput);
  }






  
  return (
    
    <Container>
   
      <div className="d-flex justify-content-center">
          <img id="logo" src={image} alt="logo du sideal" className="w-25"/>
      </div>

      <h3 className="text-center mt-5">Formulaire d'inscription</h3>
      <Form className="form" onSubmit={connexionSubmit}>
        <Form.Group className="mb-3  " controlId="surname">
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" name="first_name"  onChange ={handleInput} value={inscriptionInput.first_name}placeholder="Nom de famille" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="name">
          <Form.Label>Prénom </Form.Label>
          <Form.Control type="text" name="last_name"  onChange ={handleInput} value={inscriptionInput.last_name}placeholder="Prénom" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="birthdate">
          <Form.Label>Date de naissance </Form.Label>
          <Form.Control type="date" name="birthdate"  onChange ={handleInput} value={inscriptionInput.birthdate}placeholder="Date de naissance" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="email">
          <Form.Label>Adresse e-mail </Form.Label>
          <Form.Control type="email" name='email'  onChange ={handleInput} value={inscriptionInput.email}placeholder="Entrer votre email" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control type="password" name='password'  onChange ={handleInput} value={inscriptionInput.password} placeholder="Mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="password-confirm">
          <Form.Label>Confirmer le mot de passe </Form.Label>
          <Form.Control type="password" name='password'  onChange ={handleInput} value={inscriptionInput.password}placeholder="veuillez confirmer votre mot de passe" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="phone">
          <Form.Label>Téléphone </Form.Label>
          <Form.Control type="tel"  name='phone' onChange ={handleInput} value={inscriptionInput.phone} placeholder="Entrer votre numéro de téléphone" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="adresse">
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" name='adresse'  onChange ={handleInput} value={inscriptionInput.adresse}placeholder="Entrer votre adresse" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="cp">
          <Form.Label>Code postal</Form.Label>
          <Form.Control type="number" name='code-postal'  onChange ={handleInput} value={inscriptionInput.code_postal} placeholder="Entrer votre code postal" />
        </Form.Group>
        <Form.Group className="mb-3  " controlId="city">
          <Form.Label>Ville</Form.Label>
          <Form.Control type="text" name='city'  onChange ={handleInput} value={inscriptionInput.city}placeholder="Entrer votre ville de résidence " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkregister">
          <Form.Check
            type="checkbox"
            label=" Je certifie avoir un certificat médical"
          />
        </Form.Group>
        <Button className="bouton"  type="submit">
          S'inscrire 
        </Button>
        <div className="mt-3">
          <LinkContainer to="/">
            <a href="" className="mainTextColor">se connecter</a>
          </LinkContainer>
          </div>
      </Form>
    </Container>
  );
}

export default Inscription;
