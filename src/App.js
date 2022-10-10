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



function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />

        <Sidebar />
        <Container className="py-4">
          <Routes>
            {/* <Route path="/famille" element={<About />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/gerer" element={<HomeAdmin />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Connexion />
      <Accordion />
      <Inscription />

    </div>
  );
}

export default App;
