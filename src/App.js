import './App.css';
import React from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm ';
import { Filter } from './Components/Filter/Filter';
import { ContactList } from './Components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  // Удалить текущий контакт
  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(cont => cont.id !== id),
    });
  };

  //Добавить новый контакт
  addContact = contact => {
    console.log(contact);
    this.setState({
      contacts: [
        {
          id: uuidv4(),
          name: contact.name,
          number: contact.number,
        },
        ...this.state.contacts,
      ],
    });
  };

  setFilter = event => {
    this.setState({ filter: event.currentTarget.value.trim() });
  };

  getFilteredResult = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter name={this.state.filter} onChange={this.setFilter} />
          <ContactList
            contacts={this.getFilteredResult()}
            deleteContact={this.onDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
