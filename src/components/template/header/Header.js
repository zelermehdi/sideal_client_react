// CSS
import "./Header.css";
// Bootstrap Components
import { FiLogOut } from "react-icons/fi";
import {  Navbar } from "react-bootstrap";
// Components
import { UserContext } from "App";
// React components
import { useContext } from "react";


function Header() {
  // Retrieve the connected user from context
  const { setUser } = useContext(UserContext)

  // HANDLE LOGOUT EVENT
  const logout = (e) => {
      e.preventDefault();
      // // CLEAR DATA FROM STORAGE and from state
      localStorage.clear();
      sessionStorage.clear();
      setUser(null)
  }


  return (
    <Navbar collapseOnSelect expand="sm" bg="green" variant="dark" className="header" >
      <a href="" className="lien"  onClick={logout}>{<FiLogOut />} Se déconnecter</a>
    </Navbar>
  );
}

export default Header;
