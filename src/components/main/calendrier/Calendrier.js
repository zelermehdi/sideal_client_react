import "./Calendrier.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaArrowLeft  } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

function Calendrier(props) {
    let date = new Date 
let week = []
let tab_jour=new Array("lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche");

for (let i = 1; i <= 7; i++) {
  let first = date.getDate() - date.getDay() + i 
  let day = new Date(date.setDate(first)).toISOString().slice(0, 10)
  week.push(day)
 
}



  return (
   
    <section>
 
      <h4 className="mainTextColor mt-5">Planning</h4> 
      <div class="secondaryBgColor mt-3 py-5" id="planningContainer">
        <Row>
            <Col xs="12" md="6">
                <Row>

                        <Col xs="4" className="d-flex justify-content-center align-items-center ">
    

                               <div className=" p-5 mainBgColor text-center border border-dark fw-bold position-relative ">L  
                               
                               <div className="position-absolute top-0 start-0 p-2 small">03</div>
                                <div className="position-absolute top-0 end-0 p-2 m-2"></div>
                            </div>
                     
                     </Col>
  
                        <Col xs="4" className="d-flex justify-content-center align-items-center">

                            <div className="p-5  calendar  text-center border border-dark fw-bold position-relative " >M
                            <div className="position-absolute top-0 start-0 p-2 small ">04</div>
                                <div className="position-absolute top-0 end-0 p-2 m-2"></div>

                            </div>
                           
                                 
                            
                        </Col>
                   
       
                        <Col xs="4" className="d-flex justify-content-center align-items-center ">

                        
                            <div
                        
                            
                            
                            className="p-5  calendar  text-center border border-dark fw-bold position-relative" >M
                            <div className="position-absolute top-0 start-0 p-2 small">05</div>
                                <div className="position-absolute top-0 end-0 p-2 rounded-circle bg-danger m-2"></div>
                       
                            </div>     
                        </Col>
                               
                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5 mx-3 my2 calendar  text-center border border-dark fw-bold position-relative" >J
                            <div className="position-absolute top-0 start-0 p-2 small">06</div>
                                <div className="position-absolute top-0 end-0 p-2 m-2 rounded-circle bg-danger m-2"></div>
                           
                            </div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5 my-2 calendar  text-center border border-dark fw-bold position-relative" >V
                            <div className="position-absolute top-0 start-0 p-2 small ">07</div>
                                <div className="position-absolute top-0 end-0 p-2 small m-2">.</div>
                            
                            </div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                        <div className="p-5   text-center mainBgColor border border-dark fw-bold position-relative" >S
                        <div className="position-absolute top-0 start-0 p-2  small">08</div>
                                <div className="position-absolute top-0 end-0 p-2  rounded-circle bg-danger m-2"></div>
                        
                        </div>
                        </Col>

                        <Col xs="4 offset-md-4" className="d-flex justify-content-center align-items-center">
                            <div className="p-5  calendar  text-center border border-dark fw-bold position-relative" >D
                            <div className="position-absolute top-0 start-0 p-2 small">09</div>
                                <div className="position-absolute top-0 end-0 p-2 m-2"></div>
                           
                            </div>
                        </Col>

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <span className="me-1  p-1 mainBgColor border border-dark">{<FaArrowLeft />}</span>
                            <span className="ms-1  p-1 mainBgColor border border-dark">{<FaArrowRight />}</span>
                        </Col> 
                </Row>
            </Col>
            <Col xs="12" md="6">
                <div class="row my-2">
                    <div class=" col-md-8 p-3 calendar  text-center fw-bold  ">
                        Club Adulte
                    </div>
                    <div class=" col-md-2 p-3 d-flex justify-content-center align-items-center date-calendar">
                        19:00 <br/>20:00
                    </div>
                </div>

                <div class="row my-2">
                    <div class=" col-md-8 p-3 calendar  text-center fw-bold  ">
                        Sauna
                    </div>
                    <div class=" col-md-2 p-3 d-flex justify-content-center align-items-center date-calendar">
                        11:00 <br/>12:00
                    </div>
                </div>

                <div class="row my-2">
                    <div class=" col-md-8 p-3 calendar  text-center fw-bold  ">
                        Piscine
                    </div>
                    <div class=" col-md-2 p-3 d-flex justify-content-center align-items-center date-calendar">
                        16:00 <br/>17:00
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    </section>
  );
}

export default Calendrier;
