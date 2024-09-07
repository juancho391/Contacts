import React, { useState } from "react";

export const useContactManager = () => {
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

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (e) => {
    console.log(newContact);
    e.preventDefault();
    setContactos([...contactos, newContact]);
    setNewContact({ name: "", email: "", password: "", phone: "" });
  };

  const updateContact = (e) => {
    e.preventDafault();
    if (editingContact) {
      setContactos(
        contactos.map((c) => (c.id === editingContact.id ? editingContact : c))
      );
      setEditingContact(null);
    }
  };

  const deleteContact = (id) => {
    setContactos(contactos.filter((c) => c.id === id));
  };

  return {
    addContact,
    updateContact,
    deleteContact,
    contactos,
    newContact,
    setNewContact,
    editingContact,
    setEditingContact,
  };
};
