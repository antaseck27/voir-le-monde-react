import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top ">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-uppercase" href="#">
          🌍 MondeVisuel
        </a>

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
              <a className="nav-link active" href="#">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Continents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               Pays
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
              Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;