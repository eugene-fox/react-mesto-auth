import { Switch, Route, Link } from 'react-router-dom';

import headerLogoPath from '../images/header-logo.svg';

export function Header({email, onLogout}) {
  return (
    <header className="page__section header">
      <img className="header__logo" src={headerLogoPath} alt="Логотип Mesto Russia" />
      <Switch>
        <Route path="/" exact>
          <div className="header__info">
            <p className="header__mail">{email}</p>
            <button className="header__logout" aria-label="Выйти" onClick={onLogout}>Выйти</button>
          </div>
        </Route>
        <Route path="/sign-up">
          <div className="header__info">
            <Link className="header__navigation-link" to="sign-in">
              Войти
            </Link>
          </div>
        </Route>
        <Route path="/sign-in">
          <div className="header__info">
            <Link className="header__navigation-link" to="sign-up">
              Регистрация
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  )
}
