// function Info() {
//     return (
//       <div className="text-center">
//         <h1>ℹ️ Informations</h1>
//         <p>Application React faite avec amour pour découvrir le monde 🌍</p>
//       </div>
//     );
//   }
  
//   export default Info;
function Info() {
    return (
      <div className="info-page text-center py-5">
        <h1 className="mb-4">ℹ️ À propos de MondeVisuel</h1>
        <p className="lead mb-4">
          MondeVisuel est une application éducative qui vous permet d’explorer les pays 
          et les continents du monde entier 🌍. 
        </p>
  
        <div className="row justify-content-center">
          <div className="col-md-6 mb-1">
            <div className="info-card card shadow-sm">
              <div className="card-body">
                <h5 className="card-title"> Objectif</h5>
                <p className="card-text">
                  Faciliter la découverte des pays, leurs capitales, langues, populations 
                  et régions à travers une interface interactive et moderne.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 mb-1">
            <div className="info-card card shadow-sm">
              <div className="card-body">
                <h5 className="card-title"> Développeur</h5>
                <p className="card-text">
                  Projet conçu avec React et Bootstrap.  
                  Développé pour apprendre, pratiquer et explorer le monde numérique.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <p className="mt-4">
          ✉️ Contactez-nous : <a href="mailto:contact@mondevisuel.com">contact@mondevisuel.com</a>
        </p>
      </div>
    );
  }
  
  export default Info;
  