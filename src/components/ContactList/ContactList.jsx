import s from './ContactList.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { deleteContactOperation } from 'redux/contacts/contactsThunk'; 


export const ContactList = () => {
  const { contacts, filter} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactOperation(contactId));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={e => deleteContact(contact.id)}
                className={s.BtnDelete}
              >
                Delete
              </button>
            </li>
          ))} 
      </ul>
    </>
  );
};
