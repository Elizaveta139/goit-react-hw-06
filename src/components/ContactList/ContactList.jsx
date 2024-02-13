import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

function getFilteredContacts(contacts, filter) {
  // const contacts = getContacts(state);
  // const filter = getFilter(state);
  console.log(filter);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
}

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  // const getContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact
              key={id}
              name={name}
              number={number}
              onDelete={dispatch(deleteContact(id))}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
