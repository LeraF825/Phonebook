import { nanoid } from 'nanoid';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { addContactOperation, fetchContacts } from 'redux/contacts/contactsThunk';



export const ContactForm =()=> {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const addContact = contact => {
    contacts.some(el => el.name.includes(contact.name))
      ? alert('This contact is already in the list ')
      : dispatch(addContactOperation(contact));
  };
  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name:
          <input
            className={s.inputName}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => handleChange(e)}
            value={name}
          />
        </label>
        <label className={s.label}>
          Number:
          <input
            className={s.inputNumber}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => handleChange(e)}
            value={number}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }


