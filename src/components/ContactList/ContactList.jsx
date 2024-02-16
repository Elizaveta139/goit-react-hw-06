import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);

  // console.log('contacts', contacts);
  // console.log('filter', filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.name.toLowerCase())
  );
  // console.log('filteredContacts', filteredContacts);

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
