// function Home() {
//     return (
//       <div className="text-center ">
//         <h1>🏠 Bienvenue sur MondeVisuel</h1>
//         <p>Sélectionnez un continent pour explorer les pays.</p>
//       </div>
//     );
//   }
  
//   export default Home;
  

function Home({ setCurrentPage }) {
  return (
    <div className="home-page text-center d-flex flex-column justify-content-center align-items-center py-5">
      <h1 className="mb-4">🏠 Bienvenue sur <span className="brand">MondeVisuel</span></h1>
      
      <p className="lead mb-4">
        🌍 "Voyagez sans quitter votre écran, découvrez le monde un pays à la fois."
      </p>

      <button
        className="btn btn-warning btn-lg shadow-lg"
        onClick={() => setCurrentPage("continent")}
      >
        Explorer les continents 🌍
      </button>
    </div>
  );
}

export default Home;
