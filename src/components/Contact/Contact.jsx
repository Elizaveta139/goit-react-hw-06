import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

import css from './Contact.module.css';
import { IoIosContact, IoIosCall, IoIosTrash } from 'react-icons/io';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrap}>
      <div className={css.infoContacts}>
        <p className={css.text}>
          <IoIosContact className={css.icon} size="24" />
          {name}
        </p>
        <p className={css.text}>
          <IoIosCall className={css.icon} size="24" />
          {number}
        </p>
      </div>

      <button
        type="button"
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
        <IoIosTrash className={css.icon} size="24" />
      </button>
    </div>
  );
}
