import css from './App.module.css';

import Layout from '../Layout/Layout';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  return (
    <Layout>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {/* <h2 className={css.title}>Contacts</h2> */}
      <SearchBox />
      {/* <ContactList /> */}
    </Layout>
  );
}
