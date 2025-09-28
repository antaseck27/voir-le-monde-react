import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pays from "./components/Pays";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");   // état pour la recherche
  const [region, setRegion] = useState("All"); // état pour le continent

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,languages,flags,region,population")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  // Filtrage par recherche et par continent
  const filteredCountries = countries.filter((country) => {
    const matchName = country.name?.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRegion =
      region === "All" || country.region === region;

    return matchName && matchRegion;
  });

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center py-5">🌍 Liste des pays</h1>

        {/* Zone de filtres */}
        <div className="d-flex flex-column flex-md-row justify-content-center mb-4 gap-3">
          {/* Input recherche */}
          <input
            type="text"
            className="form-control w-50"
            placeholder="Rechercher un pays..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Select continent */}
          <select
            className="form-select w-25"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="All">🌍 Tous les continents</option>
            <option value="Africa">🌍 Afrique</option>
            <option value="Europe">🌍 Europe</option>
            <option value="Asia">🌍 Asie</option>
            <option value="Americas">🌍 Amériques</option>
            <option value="Oceania">🌍 Océanie</option>
          </select>
        </div>

        {/* Liste filtrée des pays */}
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
      </div>

      <Footer />
    </>
  );
}

export default App;
