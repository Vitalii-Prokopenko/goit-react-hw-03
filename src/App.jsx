import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
// import initialContacts from "./initialcontacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const changeInputValue = (newValue) => {
    setSearch(newValue);
  };

  const addContact = (newContact) => {
    const contactToAdd = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };

    setContacts([...contacts, contactToAdd]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={search} onType={changeInputValue} />
      <ContactList
        style={{ width: "100%" }}
        contacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
