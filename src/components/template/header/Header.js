import "./Header.css";
import { FiLogOut } from "react-icons/fi";

function Header() {
  return (
    <header>
      <a href="" className="lien">
        {<FiLogOut />} Se déconnecter
      </a>
    </header>
  );
}

export default Header;
