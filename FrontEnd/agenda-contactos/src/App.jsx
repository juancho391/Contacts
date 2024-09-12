import { useState } from "react";
import { ContactPage } from "./components/ContactPage";
import { LandingPage } from "./components/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./components/RegisterPage";
import { Home } from "./components/Home";

function App() {
  const [isLoggendIn, setIsLoggendIn] = useState(false);

  const handleLogin = () => {
    console.log("Login attempt;", email, password);
    setIsLoggendIn(true);
  };

  const handleLogout = () => {
    setIsLoggendIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Ruta para la pagina de inicio */}
      <Route
        path="/landingLogin"
        element={
          isLoggendIn ? (
            <Navigate to="/contact" />
          ) : (
            <LandingPage onLogin={handleLogin} />
          )
        }
      />
      {/* Ruta para la pagina de contacto (despues de inicias sesion) */}
      <Route
        path="/contact"
        element={
          isLoggendIn ? (
            <ContactPage onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* Ruta para la pagina de registro */}

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
