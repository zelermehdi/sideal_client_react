import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/template/header/Header";
import Sidebar from "./components/template/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/user/home/Home";
import HomeAdmin from "./components/main/admin/home/HomeAdmin";
import React from "react";
import Connexion from "components/main/connexion/connexion"; 
import Accordion from "./components/main/user/accordion/Accordion";
import Inscription from "components/main/inscription/inscription";
import UserRoutes from "routes/UserRoutes";
import AdminRoutes from "routes/AdminRoutes";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 



function App() {

  // display of routes in relation to the status of the person
  let user = {
    isAuthenticated: false,
    role : "user"
  };

  const ThemeContext = React.createContext(null);

  if(user.isAuthenticated) {
    let routing = <UserRoutes/>;
    if(user.role === "admin") {
      routing = <AdminRoutes/>
    }

    return (
      <div id="App">
        <Header />
        <ThemeContext.Provider value={user}>
          <BrowserRouter>
            <Sidebar />
            <Container className="py-4">
              {routing} 
            </Container>
          </BrowserRouter>
  
        </ThemeContext.Provider>
      </div>
    );
  }

  return (
    <div id="App">
        <Container className="py-4">
          <Row>
            <Col xs="12" md="6">
              <Accordion />
            </Col>
            <Col xs="12" md="6">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path="/inscription" element={<Inscription />} />
              </Routes>
            </BrowserRouter>
            </Col>
          </Row>
        </Container>
 
    </div>
  );
}

export default App;
