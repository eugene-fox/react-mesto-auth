import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div className="page__section">
      <form className="user-auth-form">

        <h2 className="user-auth-form__title">Регистрация</h2>

        <input
          className="user-auth-form__input"
          placeholder="Email"
          type="text"
          name=""
          id=""
        />
        <input
          className="user-auth-form__input"
          placeholder="Пароль"
          type="text"
          name=""
          id=""
        />

        <button className="user-auth-form__button">Зарегистрироваться</button>
        <p className="user-auth-form__bottom-text">
          Уже зарегистрированы? <Link className="user-auth-form__link" to="sign-in">Войти</Link>
        </p>

      </form>
    </div>
  );
}
