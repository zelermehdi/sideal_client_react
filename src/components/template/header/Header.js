import "./Header.css";
import { FiLogOut } from "react-icons/fi";

import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="green"
      variant="dark"
      className="header"
    >
      <a href="" className="lien">
        {<FiLogOut />} Se déconnecter
      </a>
    </Navbar>
  );
}

export default Header;
