import React, { useState } from "react";

export const useRegister = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validamos si los campos estan llenos

    if (!nombre || !email || !contraseña) {
      setMensaje("Todos los campos estan llenos");
      return;
    }

    const nuevoUsuario = {
      nombre,
      email,
      contraseña,
    };
    try {
      //petición POST para el formulario
      const response = await fetch("https://apicontacts-oeub.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("Registro exitoso!");

        console.log("usuario registrado:", data);
      } else {
        setMensaje(data.message || "Error en el registro");
      }
    } catch (error) {
      setMensaje("Ocurrio un error al registro");
      console.log("error".error);
    }
  };

  return {
    handleSubmit,
    nombre,
    email,
    contraseña,
    mensaje,
    setNombre,
    setEmail,
    setContraseña
  };
};
