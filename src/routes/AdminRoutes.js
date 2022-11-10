import { Routes, Route } from "react-router-dom";
import HomeAdmin from "components/main/admin/home/HomeAdmin";
import Activites from "components/main/admin/activites/activites";
import axios from "axios";
import React, { useState, useEffect } from "react";

// creation of routes for the Admin
function AdminRoutes() {


    
    return(
        <Routes>
                <Route path="/" element={<HomeAdmin />} />
                <Route path="/gerer" element={<Activites />} />
                <Route path="/notifications" element={"notifications"} />
                <Route path="/crédits" element={"crédits"} />
                <Route path="/famille" element={"famille"} />
                <Route path="/compte" element={"compte"} />


        </Routes>
    );
}

export default AdminRoutes;