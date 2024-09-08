import React, { useState } from "react";

export const useContactManager = () => {
  const [contactos, setContactos] = useState([]);

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
    const contactWithId = { ...newContact, id: Date.now() };
    setContactos([...contactos, contactWithId]);
    setNewContact({ name: "", email: "", password: "", phone: "" });
  };

  const updateContact = (e) => {
    e.preventDefault();

    if (editingContact) {
      setContactos(
        contactos.map((c) => (c.id === editingContact.id ? editingContact : c))
      );
      setEditingContact(null);
    }
  };

  const deleteContact = (id) => {
    setContactos(contactos.filter((c) => c.id !== id));
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
