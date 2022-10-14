import { Routes, Route } from "react-router-dom";
import Home from "components/main/user/home/Home";

function UserRoutes() {
    return(
        <Routes>
                <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default UserRoutes;