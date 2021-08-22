import PropTypes from 'prop-types';

function Filter({ name, onChange }) {
  return (
    <>
      <label htmlFor="">
        Find contacts by name
        <input
          type="text"
          name={name}
          placeholder="Введите имя"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export { Filter };
