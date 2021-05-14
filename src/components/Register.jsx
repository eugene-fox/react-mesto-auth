import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Register({ onRegister }) {

  const [registerData, setRegisterData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(registerData);
  }

  return (
    <div className="page__section">
      <form
      className="user-auth-form"
      onSubmit={handleSubmit}>

        <h2 className="user-auth-form__title">Регистрация</h2>

        <input
          className="user-auth-form__input"
          placeholder="Email"
          type="text"
          name="email"
          id=""
          required
          value={registerData.email}
          onChange={handleInputChange}
        />
        <input
          className="user-auth-form__input"
          placeholder="Пароль"
          type="text  "
          name="password"
          id=""
          required
          value={registerData.password}
          onChange={handleInputChange}
        />

        <button className="user-auth-form__button">Зарегистрироваться</button>
        <p className="user-auth-form__bottom-text">
          Уже зарегистрированы? <Link className="user-auth-form__link" to="sign-in">Войти</Link>
        </p>

      </form>
    </div>
  );
}
