// function Continent() {
//     return (
//       <div className="text-center">
//         <h1>🌍 Page Continent</h1>
//         <p>Les pays du continent choisi s’afficheront ici.</p>
//       </div>
//     );
//   }
  
//   export default Continent;

import { useEffect, useState } from "react";
import Pays from "../components/Pays";

function Continent() {
  const [countries, setCountries] = useState([]);
  const [view, setView] = useState("continents"); 
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,languages,flags,region,population")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  const continents = [
    { name: "Africa", img: "https://flagcdn.com/w320/za.png" },
    { name: "Europe", img: "https://flagcdn.com/w320/fr.png" },
    { name: "Asia", img: "https://flagcdn.com/w320/jp.png" },
    { name: "Americas", img: "https://flagcdn.com/w320/br.png" },
    { name: "Oceania", img: "https://flagcdn.com/w320/au.png" },
  ];

  const filteredContinents = continents.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountries = countries.filter(
    (country) =>
      country.region === selectedRegion &&
      country.name?.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center py-5">🌍 MondeVisuel</h1>

      {/* Barre de recherche */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder={view === "continents" ? "Rechercher un continent..." : "Rechercher un pays..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Vue continents */}
      {view === "continents" && (
        <div className="d-flex flex-wrap justify-content-center py-5 p-3">
          {filteredContinents.map((c, i) => (
            <div
              key={i}
              className="card m-3  shadow-lg justify-content-center"
              style={{ width: "12rem", cursor: "pointer" }}
              onClick={() => {
                setSelectedRegion(c.name);
                setView("countries");
                setSearch("");
              }}
            >
              <img src={c.img} className="card-img-top" alt={c.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{c.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Vue pays */}
      {view === "countries" && (
        <>
          <button
            className="btn btn-light mb-3"
            onClick={() => {
              setView("continents");
              setSearch("");
            }}
          >
            ⬅ Retour aux continents
          </button>

          <h2 className="text-center mb-4">
            {selectedRegion} – {filteredCountries.length} pays
          </h2>

          <div className="d-flex flex-wrap justify-content-center">
            {filteredCountries.map((country, index) => (
              <Pays
                key={index}
                nom={country.name?.common || "Inconnu"}
                capitale={country.capital ? country.capital[0] : "N/A"}
                langue={
                  country.languages
                    ? Object.values(country.languages)[0]
                    : "N/A"
                }
                drapeau={country.flags?.png}
                region={country.region || "N/A"}
                population={country.population || 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Continent;

  