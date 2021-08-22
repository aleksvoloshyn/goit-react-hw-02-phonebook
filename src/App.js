import './App.css';
import React from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm ';
import { Filter } from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
