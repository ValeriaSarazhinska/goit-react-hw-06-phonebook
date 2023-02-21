import { ContactForm } from '../ContactForm/ContactForm';
import Notification from '../Notification/Notification';
import { Filter } from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <main>
      <div>
        <h1 className={css.title}>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <Notification message="There is no contacts" />
        ) : (
          <div>
            <Filter />
            <ContactList />
          </div>
        )}
      </div>
    </main>
  );
};
