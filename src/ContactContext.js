import axios from "axios";
import React, { createContext, useReducer } from "react";

export const contactContext = createContext(); // Инициализация

const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET CONTACTS":
      return { ...state, contacts: action.payload };
    case "EDIT CONTACTS":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (newContact) => {
    if (
      !newContact.name ||
      !newContact.lastName ||
      !newContact.number ||
      !newContact.photo
    ) {
      alert("Заполните все поля");
      return;
    }
    await axios.post("http://localhost:8000/contacts", newContact); //пост запрос
    getContacts();
  };

  const getContacts = async () => {
    let { data } = await axios("http://localhost:8000/contacts"); // Рождение

    dispatch({
      type: "GET CONTACTS",
      payload: data,
    });
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`); //Удаление
    getContacts();
  };

  const editContact = async (id) => {
    let { data } = await axios(`http://localhost:8000/contacts/${id}`);
    let action = {
      type: "EDIT CONTACTS",
      payload: data,
    };
    dispatch(action);
    // console.log(id);
  };

  const saveContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8000/contacts/${newContact.id}`, //сохранение
      newContact
    );
    getContacts();
  };

  return (
    <contactContext.Provider
      value={{
        addContact: addContact,
        getContacts: getContacts,
        deleteContact: deleteContact,
        editContact: editContact,
        saveContact: saveContact,
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
