// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";
// Template parts
import Header from "./components/template/header/Header";
import Sidebar from "./components/template/sidebar/Sidebar";
// Components
import Connexion from "components/main/connexion/connexion";
import Accordion from "./components/main/user/accordion/Accordion";
import Inscription from "components/main/inscription/inscription";
import UserRoutes from "routes/UserRoutes";
import AdminRoutes from "routes/AdminRoutes";
// React components
import React, { useState } from "react";
// Other librairies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Start context to pass down the connected user
const UserContext = React.createContext(null);

function App() {
  // Retrieve the user object from local storage and keep it as state
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // Update user status after connexion if successful, set both local storage and state to update the view
  const updateUser = function (data) {
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  // If we find a connected user
  if (user) {
    // Create a vairable with state and setter to pass to context
    const userProvider = {user, setUser};
    // display of routes in relation to the status of the user
    let routing = <UserRoutes />;
    if (user.role === 1) {
      routing = <AdminRoutes />;
    }

    // Show the application interface for connected users
    return (
      <div id="App">
        <UserContext.Provider value={userProvider}>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <Container className="py-4">{routing}</Container>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    );
  }

  // If user is not authenticated show the connexion page
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
                <Route
                  path="/"
                  element={<Connexion updateUser={updateUser} />}
                />
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
export {UserContext};
