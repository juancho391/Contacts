import React, { useState } from "react";
import { useContactManager } from "../hooks/useContactManager";

export const ContactPage = ({ onLogout }) => {
  const {
    addContact,
    updateContact,
    deleteContact,
    contactos,
    newContact,
    setNewContact,
    editingContact,
    setEditingContact,
  } = useContactManager();

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

      <form
        onSubmit={editingContact ? updateContact : addContact}
        className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {editingContact ? "Editar contacto" : "Añadir contacto"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border bourded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Nombre"
            value={editingContact ? editingContact.name : newContact.name}
            onChange={(e) =>
              editingContact
                ? setEditingContact({ ...editingContact, name: e.target.value })
                : setNewContact({ ...newContact, name: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Email"
            value={editingContact ? editingContact.email : newContact.email}
            onChange={(e) =>
              editingContact
                ? setEditingContact({
                    ...editingContact,
                    email: e.target.value,
                  })
                : setNewContact({ ...newContact, email: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            id="Telefono"
            placeholder="Phone Number"
            value={editingContact ? editingContact.phone : newContact.phone}
            onChange={(e) =>
              editingContact
                ? setEditingContact({
                    ...editingContact,
                    phone: e.target.value,
                  })
                : setNewContact({ ...newContact, phone: e.target.value })
            }
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {editingContact ? "Actualizar Contacto" : "Añadir Contacto"}
          </button>
          {editingContact && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setEditingContact(null)}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de contactos */}

      <div className="bg-white shadow-md rounded px-8 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Lista de contactos
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-gray-dark border-b border-grey-light">
                  Nombre
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-gray-dark border-b border-grey-light">
                  Email
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-gray-dark border-b border-grey-light">
                  Telefono
                </th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b border-grey-light">
                    {contact.name}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {contact.email}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {contact.phone}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    <button
                      onClick={() => setEditingContact(contact)}
                      className="text-blue-500 animate-pulse hover:text-blue-700 mr-2"
                    >
                      <i className="bx bxs-edit text-black"></i>
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="text-red-500 animate-pulse hover:text-red-700"
                    >

                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
