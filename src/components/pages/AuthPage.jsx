import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/contacts/contactsThunk';
import s from './Forma.module.css';

const AuthPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ userName, email, userPass }));
    setUserName('');
    setEmail('');
    setUserPass('');
  };
  const handleName = e => {
    setUserName(e.target.value);
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
        <div className={s.head}>
          <span>Sign up</span>
          <p>Create a free account with your email.</p>
        </div>
        <div className={s.inputs}>
            <input
              className={s.input}
              onChange={handleName}
              type="text"
              name="name"
              value={userName}
              placeholder="Full Name"
            />
            <input
              className={s.input}
              onChange={handleEmail}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
            />
            <input
              className={s.input}
              onChange={handlePass}
              type="password"
              name="password"
              value={userPass}
              placeholder="Password"
            />
        </div>
        <button className={s.addButton} type="submit"> Sign Up</button>
      </form>
    </div>
  );
};
export default AuthPage;
