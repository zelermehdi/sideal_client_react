import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/template/header/Header";
import Sidebar from "./components/template/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/user/home/Home";
import HomeAdmin from "./components/main/admin/home/HomeAdmin";
import React, { useState } from "react";
import Connexion from "components/main/connexion/connexion";
import Accordion from "./components/main/user/accordion/Accordion";
import Inscription from "components/main/inscription/inscription";
import UserRoutes from "routes/UserRoutes";
import AdminRoutes from "routes/AdminRoutes";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

axios.defaults.baseURL = "http://sideal-refonte-api.local/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const ThemeContext = React.createContext(null);

function App() {
  //find user in json user object
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Update user status after connexion
  const updateUser = function(data) {
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  }
  

  if (user) {
    // display of routes in relation to the status of the person
    let routing = <UserRoutes />;
    if (user.role === 1) {
      routing = <AdminRoutes />;
    }

    return (
      <div id="App">
        <Header />
        <ThemeContext.Provider value={user}>
          <BrowserRouter>
            <Sidebar />
            <Container className="py-4">{routing}</Container>
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    );
  }

  // If user is not authenticated
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
                <Route path="/" element={<Connexion updateUser={updateUser}/>} />
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
