import { useState } from "react";
import { ContactPage } from "./components/ContactPage";
import { LandingPage } from "./components/LandingPage";

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
    <div>
      {isLoggendIn ? (
        <ContactPage onLogout={handleLogout} />
      ) : (
        <LandingPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
