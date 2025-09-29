import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Continent from "./pages/Continent";
import Info from "./pages/Info";
import PaysPage from "./pages/PaysPage";  


function App() {
  const [currentPage, setCurrentPage] = useState("home");


  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      <div className="container mt-5 pt-5">
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "continent" && <Continent />}
        {currentPage === "pays" && <PaysPage />}    
        {currentPage === "info" && <Info />}
      </div>

      <Footer />
    </>
  );
}

export default App;
