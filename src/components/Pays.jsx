// import React from "react";
// import { Link } from "react-router-dom";

// const Pays = ({ country }) => {
//   return (
//     <div className="rounded-3 col-11 cardContainer col-md-5 col-lg-3 mx-auto">
//       <div className="card elements rounded-3 border-0">
//         <Link
//           to={`/country/${country.capital[0]}`}
//           className="text-decoration-none text-white"
//         >
//           <div className="flag-container">
//             <img
//               src={country.flags?.png}
//               className="country-flag"
//               alt={`${country.name.common} flag`}
//             />
//           </div>
//           <div className="card-body">
//             <h5 className="card-title mb-2 mt-2 overflow-hidden">
//               {country.name.common}
//             </h5>
//             <ul className="list-group list-group-flush mb-3 m-0 border-0 p-0 bg-transparent">
//               <li className="list-group-item m-1 border-0 p-0 bg-transparent elements">
//                 <span className="fw-bold">Population</span> :{" "}
//                 {country.population.toLocaleString()}
//               </li>
//               <li className="list-group-item m-1 border-0 p-0 bg-transparent elements">
//                 <span className="fw-bold">Region</span> : {country.region}
//               </li>
//               <li className="list-group-item m-1 border-0 p-0 bg-transparent elements">
//                 <span className="fw-bold">Capital</span> : {country.capital[0]}
//               </li>
//             </ul>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Pays;
import React from "react";

const Pays = ({ nom, capitale, langue, drapeau, region, population }) => {
  return (
    <div
      className="card m-3 shadow-sm country-card position-relative"
      style={{ width: "14rem", height: "18rem", cursor: "pointer", overflow: "hidden" }}
    >
      {/* Drapeau + nom */}
      <img src={drapeau} className="card-img-top" alt={nom} />
      <div className="card-body text-center">
        <h5 className="card-title">{nom}</h5>
      </div>

      {/* Panneau latéral caché */}
      <div className="country-details p-2">
        <div className="details-content">
          <strong>Capitale :</strong> {capitale} <br />
          <strong>Région :</strong> {region} <br />
          <strong>Population :</strong>{" "}
          {population ? population.toLocaleString() : "N/A"} <br />
          <strong>Langue :</strong> {langue}
        </div>
      </div>
    </div>
  );
};

export default Pays;


// import React from "react";

// const Pays = ({ nom, capitale, devise, langue, drapeau, region, population }) => {
//   return (
//     <div className="card m-3 shadow-sm" style={{ width: "12rem" }}>
//       <img src={drapeau} className="card-img-top" alt={nom} />
//       <div className="card-body">
//         <h5 className="card-title">{nom}</h5>
//         <p className="card-text">
//           <strong>Capitale :</strong> {capitale} <br />
//           <strong>Région :</strong> {region} <br />
//           <strong>Population :</strong> {population.toLocaleString()} <br />
//           <strong>Devise :</strong> {devise} <br />
//           <strong>Langue :</strong> {langue}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Pays;



// import React from "react";

// const Pays = ({ nom, drapeau }) => {
//   return (
//     <div className="card m-2" style={{ width: "12rem" }}>
//       <img src={drapeau} className="card-img-top" alt={nom} />
//       <div className="card-body">
//         <p className="card-text text-center fw-bold">
//           {nom}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Pays;

