import { useState } from 'react';
// import { Link } from 'react-router-dom';

export function Login({ onLogin }) {

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setloginData({
      ...loginData,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData);
  }

  return (
    <div className="page__section">
      <form
        className="user-auth-form"
        onSubmit={handleSubmit}
        >
        <h2 className="user-auth-form__title">Вход</h2>
        <input
          className="user-auth-form__input"
          placeholder="Email"
          type="text"
          name="email"
          id=""
          value={loginData.email}
          onChange={handleInputChange}
        />
        <input
          className="user-auth-form__input"
          placeholder="Пароль"
          type="text"
          name="password"
          id=""
          value={loginData.password}
          onChange={handleInputChange}
        />

        <button className="user-auth-form__button">Войти</button>
      </form>
    </div>
  );
}
