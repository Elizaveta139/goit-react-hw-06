import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
// import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

// function getFilteredContacts(contacts, filter) {
//   // const contacts = getContacts(state);
//   // const filter = getFilter(state);
//   console.log(filter);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// }

export default function ContactList() {
  // const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters);

  console.log('contacts', contacts);
  console.log('filter', filters);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(filters.toString().toLowerCase())
  );
  console.log('filteredContacts', filteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
}
