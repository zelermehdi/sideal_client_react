import { Routes, Route } from "react-router-dom";
import HomeAdmin from "components/main/admin/home/HomeAdmin";
import Activites from "components/main/admin/activites/activites";
import Unique from "components/main/admin/activites/unique";
import Annuelles from "components/main/admin/activites/annuelles";
import Ponctuelles from "components/main/admin/activites/non-annuelles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Creation from "components/main/admin/activites/creation ";




// creation of routes for the Admin
function AdminRoutes() {

  







  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/gerer" element={<Activites />} />
      <Route path="/activités-annuelles" element={<Annuelles type={0}/>} />
      <Route path="/activites-non-annuelles" element={<Ponctuelles type={1} />} />
      <Route path="/unique" element={<Unique type={2} />} />
      <Route path="/notifications" element={"notifications"} />
      <Route path="/crédits" element={"crédits"} />
      <Route path="/famille" element={"famille"} />
      <Route path="/compte" element={"compte"} />
      <Route path="/creation" element={<Creation />}/>
    </Routes>
  );
}

export default AdminRoutes;
