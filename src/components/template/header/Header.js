// CSS
import "./Header.css";
// Bootstrap Components
import { FiLogOut } from "react-icons/fi";
import { Navbar } from "react-bootstrap";
// Components
import { UserContext } from "App";
// React components
import { useContext } from "react";
import axios from "axios";
import swal from "sweetalert";

// axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function (config){

//   config.headers.Authorization = token ? `Bearer ${token}` : '';
//   return config;

// });

function Header() {
  // Retrieve the connected user from context
  const { setUser } = useContext(UserContext);

  // HANDLE LOGOUT EVENT
  const logout = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = `http://sideal-refonte-api.local/api/logout`;
    const headers = { 'Authorization': 'Bearer ' + token };

    // axios.defaults.headers.post["Content-Type"] = "application/json";
    // axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
    // axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    
    axios({
      method: 'post',
      url: url,
      data: {},
      config: { headers: headers}
      })
      .then(function (res) {
          //handle success
          // // CLEAR DATA FROM STORAGE and from state
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          swal("Success", res.data.message, "success");
          setUser(null);
      })
      .catch(function (res) {
          //handle error
          console.log(res);
      });

    // axios({method: 'post', url: url, headers: headers, params: {}})
    //   .then((res) => {
    //     if (res.data.status === 200) {
          
    //     }
    //     else {
    //       console.log(res.data.message);
    //     }
    //   });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="green"
      variant="dark"
      className="header"
    >
      <a href="" className="lien" onClick={logout}>
        {<FiLogOut />} Se déconnecter
      </a>
    </Navbar>
  );
}

export default Header;
