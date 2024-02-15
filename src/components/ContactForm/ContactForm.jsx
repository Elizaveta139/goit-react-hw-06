import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';
import { IoIosContact, IoIosCall, IoMdPersonAdd } from 'react-icons/io';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const initialValues = { id: '', name: '', number: '' };

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  function handleSubmit({ name, number }, actions) {
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <label htmlFor={nameFieldId} className={css.label}>
            <IoIosContact size="24" />
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.div}>
          <label htmlFor={numberFieldId} className={css.label}>
            <IoIosCall size="24" />
            Number
          </label>
          <Field className={css.field} type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          <IoMdPersonAdd className={css.svg} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
