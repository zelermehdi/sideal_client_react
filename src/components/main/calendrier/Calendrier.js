import "./Calendrier.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaArrowLeft  } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

function Calendrier() {
  return (
    // <section>
    //     <h4 className="mainTextColor mb-3">Planning</h4>
    //     <div class="secondaryBgColor" id="planningContainer">
    //         <Row>
    //             {/* Days selection */}
    //             <Col xs='12' md='6'>
    //                 <Row>
    //                     <Col xs="4">
    //                         <div>L</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <div>M</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <div>M</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <div>J</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <div>V</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <div>S</div>
    //                     </Col>
    //                     <Col xs="4" className="offset-4">
    //                         <div>D</div>
    //                     </Col>
    //                     <Col xs="4">
    //                         <span>precedent</span>
    //                         <span>suivant</span>
    //                     </Col>
    //                 </Row>
    //             </Col>
    //             {/* Activities */}
    //             <Col xs='12' md='6'>

    //             </Col>
    //         </Row>
    //     </div>
    // </section>

    <section>
      <h4 className="mainTextColor p-5 ">Planning</h4>
      <div class="secondaryBgColor py-5" id="planningContainer">
        <Row>
            <Col xs="12" md="6">
                <Row>
                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className=" p-5 mainBgColor text-center border border-dark fw-bold ">L</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5  calendar  text-center border border-dark fw-bold " >M</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5  calendar  text-center border border-dark fw-bold" >M</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5 mx-3 my2 calendar  text-center border border-dark fw-bold" >J</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5 my-2 calendar  text-center border border-dark fw-bold" >V</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                        <div className="p-5   text-center mainBgColor border border-dark fw-bold" >S</div>
                        </Col>

                        <Col xs="4 offset-md-4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5  calendar  text-center border border-dark fw-bold" >D</div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <span className="me-1  p-1 mainBgColor border border-dark">{<FaArrowLeft />}</span>
                            <span className="ms-1  p-1 mainBgColor border border-dark">{<FaArrowRight />}</span>
                        </Col>
                </Row>
            </Col>
                     <Col xs="12" md="6">
                
               
                        <div class="row">
                             <div class=" col-md-7 p-5 calendar  text-center fw-bold  ">Club Adulte</div>
                              <div class=" col-md-3 p 5   text-center border border-dark mainBgColor"> 19:00 <br/>20:00</div>
                        </div>

                        <div class="row my-2">
                            <div class=" col-md-7 p-5 calendar  text-center fw-bold  ">Sauna</div>
                             <div class=" col-md-3 p 5 mainBgColor  text-center border border-dark">9:00 <br/>10:00</div>
                        </div>

                        <div class="row">
                            <div class=" col-md-7 p-5 calendar  text-center fw-bold ">Aquagym</div>
                             <div class=" col-md-3 p 5 mainBgColor  text-center border border-dark">11:00<br/>12:00</div>
                        </div>
                       
                 
                    </Col>
        </Row>
      </div>
    </section>
  );
}

export default Calendrier;
