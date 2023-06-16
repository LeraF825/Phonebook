import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/contacts/contactsThunk';
import s from './Forma.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLogin({ email, userPass }));
    setEmail('');
    setUserPass('');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setUserPass(e.target.value);
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputs}>
      <input
            className={s.input}
            onChange={handleEmail}
            type="email"
            name="email"
            value={email}
          />
          <input
            className={s.input}
            onChange={handlePass}
            type="password"
            name="password"
            value={userPass}
          />
      </div>   
        <button className={s.addButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
