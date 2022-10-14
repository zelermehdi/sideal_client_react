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
import Accordion from "./components/main/Accordion/Accordion";
import Inscription from "components/main/inscription/inscription";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 



function App() {


  let user = {
    isAuthenticated: true,
    role : "user"
  };

  const ThemeContext = React.createContext(null);

  if(user.isAuthenticated) {
    return (
      <div id="App">
        <Header />
       
        <ThemeContext.Provider value={user}>
          <BrowserRouter>
            <Sidebar />
            <Container className="py-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerer" element={<HomeAdmin />} />
            
              </Routes>
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
