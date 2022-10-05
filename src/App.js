import "./App.css";
import Header from "./components/template/header/Header";
import Sidebar from "./components/template/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <div>
      <BrowserRouter>
      <Header></Header>
      <Sidebar />
      <Routes>
        <Route path="/gerer" element={<gerer />} />
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
