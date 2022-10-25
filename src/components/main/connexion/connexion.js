import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./connexion.css";
import image from "./sideal.png";
import react, {useState} from 'react';
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import swal from 'sweetalert';
  import { useNavigate } from 'react-router-dom';
  import React from "react";


  

  function Connexion(props) {

  
  
    const navigate = useNavigate();

    const [connexionInput, setConnexionInput ] = useState
    ({
    email:  '',
    password: '',
    error_list: [],

    });

    const handleInput = (e)=>{
    setConnexionInput({...connexionInput, [e.target.name] : e.target.value}) ;
   }

    const connexionSubmit = (e)=>{
    e.preventDefault();
    const data=
    {
      email:connexionInput.email,
      password:connexionInput.password
    }
    

        axios.post('http://sideal-refonte-api.local/login', data).then((res)=>{
        console.log(res);
        if(res.data.status === 200)
        {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.email);
            swal("Success",res.data.message,"success");
            if(res.data.role === 'user')
             {
            
    



            }
            else
            {
               
            }

            }else if(res.data.status === 401)
           {
            swal("Warning",res.data.message,"warning");
        }else{
          setConnexionInput({...connexionInput, error_list: res.data.validation_errors });
        }
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
          <span>{connexionInput.error_list.email}</span>

       
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
