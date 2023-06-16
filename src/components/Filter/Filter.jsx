import s from './Filter.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/contacts/contactsSlice';


export  const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const filterContacts = ({ target: { value } }) => {
    setFilter(value);
    dispatch(filterContactAction(value));
  };

    return (
      <div className={s.container}>
        Find contacts by name
        <input className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={filterContacts}
        />
      </div>
    );
  }
  
  
