import { Routes, Route } from "react-router-dom";
import Home from "components/main/admin/home/HomeAdmin";

function AdminRoutes() {
    return(
        <Routes>
                <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default AdminRoutes;