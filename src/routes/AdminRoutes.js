import { Routes, Route } from "react-router-dom";
import HomeAdmin from "components/main/admin/home/HomeAdmin";

// creation of routes for the Admin
function AdminRoutes() {
    return(
        <Routes>
                <Route path="/" element={<HomeAdmin />} />
                <Route path="/gerer" element={"gérer activites"} />
                <Route path="/notifications" element={"notifications"} />
                <Route path="/crédits" element={"crédits"} />
                <Route path="/famille" element={"famille"} />
                <Route path="/compte" element={"compte"} />


        </Routes>
    );
}

export default AdminRoutes;