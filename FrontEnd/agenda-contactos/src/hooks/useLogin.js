import React, { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    // Perform login logic
    setLoading(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
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
