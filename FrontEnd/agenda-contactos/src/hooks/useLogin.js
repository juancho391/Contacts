import React, { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    // Perform login logic
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("https://apicontacts-oeub.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful!");
      } else {
        setError(data.message || "Error en el login");
      }
    } catch (error) {
      setError("Error en el login");
    }
  };
  return { login, loading, error, success };
};

export default useLogin;
