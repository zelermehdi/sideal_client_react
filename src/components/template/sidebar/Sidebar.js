//import useState hook to create menu collapse state
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import SelectMenu from "../select/select";
import { LinkContainer } from "react-router-bootstrap";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";

import { ImCoinEuro } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <aside id="sidebar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p> {menuCollapse ? "JM" : "Jordan Mehdi"}</p>
              <p> {menuCollapse ? "" : <SelectMenu />}</p>
            </div>

            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <LinkContainer to="/">
                <MenuItem icon={<FiHome />}>Accueil</MenuItem>
              </LinkContainer>
              <LinkContainer to="gerer">
                <MenuItem icon={<FaList />}>Gérer activites</MenuItem>
              </LinkContainer>

              <LinkContainer to="notifications">
                <MenuItem icon={<RiPencilLine />}>Notifications</MenuItem>
              </LinkContainer>
              <LinkContainer to="crédits">
                <MenuItem icon={<ImCoinEuro />}>Crédits</MenuItem>
              </LinkContainer>
              <LinkContainer to="famille">
                <MenuItem icon={<AiOutlineTeam />}>Famille</MenuItem>
              </LinkContainer>
              <LinkContainer to="compte">
                <MenuItem icon={<VscAccount />}>Mon compte</MenuItem>
              </LinkContainer>
            </Menu>
          </SidebarContent>
          <SidebarFooter></SidebarFooter>
        </ProSidebar>
      </aside>
    </>
  );
};

export default Sidebar;
