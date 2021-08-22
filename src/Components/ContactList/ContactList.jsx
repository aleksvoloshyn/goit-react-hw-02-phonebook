import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact, id }) {
  //   contacts = [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];

  return (
    <>
      <ul>
        {contacts.map(cont => {
          return (
            <li key={cont.id}>
              <span>{cont.name}</span>
              <span>{cont.number}</span>
              <button onClick={() => deleteContact(cont.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export { ContactList };
