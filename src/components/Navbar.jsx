import { useState } from "react";

function Navbar({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top ">
      <div className="container-fluid">
        <span
          className="navbar-brand fw-bold text-uppercase"
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentPage("home")}
        >
          🌍 MondeVisuel
        </span>

        {/* Bouton menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage("home")}
              >
                Accueil
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage("continent")}
              >
                Continent
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage("pays")}
              >
                Pays
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage("info")}
              >
                Information
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
