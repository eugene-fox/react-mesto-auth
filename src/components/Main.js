import React, { useState, useContext } from 'react';
import { Card } from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Loader} from './Loader';

export function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
  isCardsLoading
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__information">
          <div className="profile__avatar">
            <img className="profile__avatar-picture" src={currentUser.avatar}
              alt={currentUser.name} />
            <button
              type="button"
              aria-label="Изменить изображение профиля"
              className="profile__avatar-edit"
              onClick={onEditAvatar}
            />
          </div>
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button
            type="button"
            aria-label="Редактировать информацию профиля"
            className="profile__edit-button"
            onClick={onEditProfile}
          />
          <button
            type="button"
            aria-label="Добавить новую карточку"
            className="profile__add-button"
            onClick={onAddPlace}
          />
        </div>
      </section>
      <section className="galery">

        {isCardsLoading && <Loader />}

        <ul className="galery__places">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
