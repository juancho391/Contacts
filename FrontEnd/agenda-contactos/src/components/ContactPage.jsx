import React, { useState } from "react";

export const ContactPage = ({ onLogout }) => {
  const [contactos, setContactos] = useState([
    {
      nombre: "John Doe",
      telefono: "1234567890",
      email: "johndoe@example.com",
    },
    {
      nombre: "Jane Smith",
      telefono: "9876543210",
      email: "janesmith@example.com",
    },
  ]);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mis contactos </h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onLogout}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Formularioa para añadir/editar contactos */}

      {/* <form onSubmit={editingContact ? updateContact : addContact} className="mb-8"></form> */}
    </div>
  );
};
