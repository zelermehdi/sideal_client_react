import "./Calendrier.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaArrowLeft  } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import {useState} from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";



function Calendrier(props) {
    let date = new Date();
    let currentDay = date.getDate();
    let weekDays = [];

    for (let i = 1; i <= 7; i++) {
        let first = date.getDate() - date.getDay() + i 
        let day = new Date(date.setDate(first)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', weekday: 'long' })
        weekDays[day.split(' ')[1]] = (day.split(' '));
     
    };

    const [selectedDay, setselectedDay] = useState(weekDays[currentDay]);
    const handleClick = event => {
        let dayNumber = event.target.getElementsByClassName('weekDay')[0].innerText;
        setselectedDay(weekDays[dayNumber]);
    };
 
  return (
    <section>
      <h4 className="mainTextColor mt-5">Planning</h4> 
      <div class="secondaryBgColor mt-3 py-5" id="planningContainer">
        <Row>
            <Col xs="12" md="6">
                <Row>
                    {weekDays.map((weekDay) => {
                            return (
                                <Col xs="4" className="d-flex justify-content-center align-items-center ">
                                    <div className={ (selectedDay[1] === weekDay[1] ? "mainBgColor" : "bg-white") + " p-5 my-2 text-center border border-dark fw-bold position-relative"}  onClick={handleClick}>
                                        { weekDay[0][0].toUpperCase() }
                                        <div className="weekDay position-absolute top-0 start-0 p-2 small">{ weekDay[1]}</div>
                                        <div className="position-absolute top-0 end-0 p-2 m-2"></div>
                                        
                                    </div>
                                </Col>

                            );
                    })}

                        <Col xs="4" className="d-flex justify-content-center align-items-center">
                            <span className="me-1  p-1 mainBgColor border border-dark">{<FaArrowLeft />}</span>
                            <span className="ms-1  p-1 mainBgColor border border-dark">{<FaArrowRight />}</span>
                        </Col> 
                </Row>
            </Col>
            <Col xs="12" md="6">
                <p className="fw-bold">{ selectedDay[0].toUpperCase() + " " +  selectedDay[1] + " " + selectedDay[2].toUpperCase() }</p>
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
