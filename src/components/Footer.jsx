/** @format */

import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark footer text-light mt-5">
      <div className="container pb-5">
        <div className="row">
          {/* <div className="col-md-4">
            <h5 className="fw-bold mb-2">WorldExplorer</h5>
            <p className="small mb-0">Explorer. Comprendre. Respecter. — Guides, cartes et patrimoines du monde.</p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">Liens utiles</h6>
            <ul className="list-unstyled small mb-0">
              <li><a className= "text-decoration-none text-light" href="#">Accueil</a></li>
              <li><a className="text-decoration-none text-light" href="#">Continents</a></li>
              <li><a className="text-decoration-none text-light" href="#">À propos</a></li>
              <li><a className="text-decoration-none text-light" href="#">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-2">Contact</h6>
            <p className="small mb-1">info@worldexplorer.example</p>
            <p className="small mb-0">+221 77 000 00 00</p>
          </div> */}

          <h6 className="fw-bold ">WorldExplorer</h6>
          <p className="small mb-0">
            Explorer. Comprendre. Respecter. — Guides, cartes et patrimoines du
            monde.
          </p>
        </div>

        <hr className="border-light my-3" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div>© {year} WorldExplorer. Tous droits réservés.</div>
          <div className="mt-2 mt-md-0">
            <a
              href="#"
              className="text-light text-decoration-none me-3"
              aria-label="Twitter">
              Twitter
            </a>
            <a
              href="#"
              className="text-light text-decoration-none me-3"
              aria-label="Facebook">
              Facebook
            </a>
            <a
              href="#"
              className="text-light text-decoration-none"
              aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}