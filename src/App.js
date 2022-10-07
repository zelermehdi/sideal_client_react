import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/template/header/Header";
import Sidebar from "./components/template/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/user/home/Home";
import HomeAdmin from "./components/main/admin/home/HomeAdmin";
import React from "react";
import BaseComponent from "bootstrap/js/dist/base-component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Sidebar />

        <Routes>
          {/* <Route path="/famille" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/gerer" element={<HomeAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
