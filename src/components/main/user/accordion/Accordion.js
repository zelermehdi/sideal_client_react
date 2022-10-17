import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import "./Accordion.css";
import { FaPlus } from "react-icons/fa";





function AccordionBasique() {
  return (
    <div>
      <h1 className='mainTextColor text-center'>Information</h1>
      <p className='mt-3 mb-5'>Bienvenue sur l’outil de réservation en ligne du SIDEAL.<br/>Pour simplifier vos réservations à des activités annuelles et/ou ponctuelles, la piscine de Pont Saint Pierre met à votre disposition cet outil de réservation en ligne. Ici, vous pourrez réserver des activités, consulter vos réservations ou encore imprimer vos factures.</p>
      <Container id="accordion" className='mt-5 py-3 secondaryBgColor'>
        <h2 className='mainTextColor text-center my-3'>Besoin d'aide ?</h2>
        <div id="item">
          <Accordion >
            <Accordion.Item eventKey="0" className='my-1' >
              <Accordion.Header>
                <div className='question d-flex justify-content-between align-items-center w-100'>
                  Accordion Item #1
                  <span className='icon'>{< FaPlus/>}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item >
            <Accordion.Item eventKey="1" className='my-1'>
              <Accordion.Header >
                <div className='question d-flex justify-content-between align-items-center w-100'>
                  Accordion Item #2
                  <span className='icon'>{< FaPlus/>}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='my-1'>
              <Accordion.Header>
                <div className='question d-flex justify-content-between align-items-center w-100'>
                  Accordion Item #1
                  <span className='icon'>{< FaPlus/>}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>     
        </div>
      </Container>
    </div>
  );
}

export default AccordionBasique;