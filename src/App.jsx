
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pays from "./components/Pays";



import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
          <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Bienvenue sur MondeVisuel 🌍</h1>
        <Pays country />

       <Footer />

      </div>

    </>
  )
}

export default App
