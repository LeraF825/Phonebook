import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import React from 'react';
import { useSelector } from 'react-redux';

export const UserForm = () => {
    const { contacts } = useSelector(state => state.contacts);
  
    return (
      <div>
        <ContactForm />
        {contacts.length > 1 && <Filter />}
        <ContactList />
      </div>
    );
  };