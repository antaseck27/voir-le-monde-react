import { useEffect, useState } from "react";
import Pays from "../components/Pays";

function PaysPage() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,languages,flags,region,population"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  // Filtrer par recherche
  const filteredCountries = countries.filter((country) =>
    country.name?.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid ">
      <h1 className="text-center py-3">🌍 Tous les pays du monde</h1>

      {/* Barre de recherche */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Rechercher un pays..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Liste des pays */}
      <div className="d-flex flex-wrap justify-content-center">
        {filteredCountries.map((country, index) => (
          <Pays
            key={index}
            nom={country.name?.common || "Inconnu"}
            capitale={country.capital ? country.capital[0] : "N/A"}
            langue={
              country.languages ? Object.values(country.languages)[0] : "N/A"
            }
            drapeau={country.flags?.png}
            region={country.region || "N/A"}
            population={country.population || 0}
          />
        ))}
      </div>
    </div>
  );
}

export default PaysPage;
