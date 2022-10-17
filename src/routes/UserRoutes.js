import { Routes, Route } from "react-router-dom";
import Home from "components/main/user/home/Home";

// creation of routes for the user

function UserRoutes() {
    return(
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerer" element={"gérer activites"} />
                <Route path="/notifications" element={"notifications"} />
                <Route path="/crédits" element={"crédits"} />
                <Route path="/famille" element={"famille"} />
                <Route path="/compte" element={"compte"} />

        </Routes>
    );
}

export default UserRoutes;